let sd = require("showdown");

let fs = require("fs");

let text = fs.readFileSync(
  "articles/Coding_locally_after_learning_in_an_online_REPL.md",
  "utf8"
);
// console.log(f);

let conv = new sd.Converter();

let html = conv.makeHtml(text);
fs.writeFile("testing.html", html, function (er) {
  if (er) {
    console.log("bad");
  } else {
    console.log("good");
  }
});
