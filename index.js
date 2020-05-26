let sd = require("showdown");
let fs = require("fs");
let dom = require("jsdom");

function htmlForMd(filePath) {
  let text = fs.readFileSync(filePath, "utf8");
  let conv = new sd.Converter();
  let html = conv.makeHtml(text);
  return html;
}

function writeToFile(filePath, html) {
  fs.writeFile(filePath, html, function (er) {
    if (er) {
      console.log("bad");
    } else {
      console.log("good");
    }
  });
}

function createDomFromContent(fileContent) {
  let { JSDOM } = dom;
  let jsdom = new JSDOM(fileContent);

  return jsdom;
}

function insertHtmlIntoTemplate(html) {
  let templatePath = "templates/articleTemplate.html";
  let fileContent = fs.readFileSync(templatePath, { encoding: "utf8" });
  let jsdom = createDomFromContent(fileContent);

  let ele = jsdom.window.document.createElement("body");
  ele.innerHTML = html;
  jsdom.window.document.body.replaceWith(ele);
  return jsdom;
}

function addToIndex(indexDom, files) {
  files.forEach((v) => {
    let cont = indexDom.window.document.createElement("div");
    let aTag = indexDom.window.document.createElement("a");

    let fss = v.split("_").join(" ");
    let indexOfFileEnding = fss.indexOf(".");
    let tagTextContent = fss.substring(0, indexOfFileEnding);

    aTag.setAttribute("href", `html/${v}`);
    aTag.textContent = tagTextContent;

    cont.append(aTag);
    indexDom.window.document.querySelector("#articles").append(cont);
  });

  fs.writeFileSync("index.html", indexDom.serialize(), "utf8");
}

async function main() {
  fs.readdir("articles", "utf8", (error, files) => {
    files.forEach((v) => {
      if (v.endsWith(".md")) {
        let html = htmlForMd("articles/" + v);
        let finalDom = insertHtmlIntoTemplate(html);
        writeToFile(`html/${v}.html`, finalDom.serialize());
      }
    });
  });

  fs.readdir("html", "utf-8", (err, files) => {
    let index2 = fs.readFileSync("templates/indexTemplate.html", {
      encoding: "utf8",
    });
    let domFromIndex = createDomFromContent(index2);
    addToIndex(domFromIndex, files);
  });
}

main();
