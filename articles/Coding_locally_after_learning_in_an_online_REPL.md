# Start Developing Locally - Learn Programming for complete beginners 📈

So you just finished your first coding course on codecademy or you’ve been using an online ide like repl.it. Now you're wondering how do I actually do this on my own computer? Well I’ll cover that in this article. In this article I’m going to use node js (javascript) and show you how to get up and running and explain what’s going on.

## TODO

1. decide on title
2. add my tiwtter handle
3. think of more articles to branch off of from here

---

other possible titles

- get your code academy editor setup locally
- basics of setting up an enviornment and tools you need
- so you learned to code from code academy but have no idea what to do locally

## add my twitter @sasacocic

# Heres what’s on the menu

1. Install node js and talk about what’s going on
1. Talk about text editors and how you get some sweet functionality on your local machine + all the tools they come with to help you develop.

## The short of it 👏

1. Open a shell (wtf is a shell)
1. Use your compiler or interpreter (wtf is a compiler or interpreter) and pass in a file as an argument (whaaaaat)
1. Boom, you're up and running. A hello world program should be good to go
1. Now you can do the most atomic step of starting a program. This is good, but you can do a lot better! Knowing how this works is an indispensable tool. To supercharge your development you’ll want a good text editor or IDE (text editors these days really blur the lines between ide and text editor) this is what’ll give you syntax highlighting, autocompletion, and a bunch of other cool features.

## The long of it 😾

Ok the short of it really wasn’t that helpful at all. So lets dig into these things so you know what’s going on! Alright lets install node, but wait wtf is node.

#### Detour to javascript land 😥

Welcome to Javascript land. Just like all programming langauges Javascript needs to be transformed from the text we see on the screen into binary (what our roboto overlords understand i.e. 0's & 1's). Browsers like Firefox and Google know how to do this. Specifically Google Chrome's engine for doing this is called V8. V8 looks at javascript code and turns it into something a computer can understand. BOOM Binary. Now some smart people said lets take V8 and lets build a library to interact with your OS and make that into a program (There is more to it, but I think for the most part that's it). That's node V8 plus a library that lets you do things with your OS that V8 didn't support. Node JS is very similar to your browser in the sense that it's just something that takes javascript code and runs it.

#### Downloading Node JS 😤

If you go to [node js's website](https://nodejs.org/en/) you can download Node from there. Go ahead and download the one that says LTS (LTS stands for long term support). Follow those instructions and it should be pretty straight forward. If it isn't let me know and I will add instructions to this article.

#### Using Node 🤔

Alright cool now we have Node installed on our machine. Lets write a hello world program! Copy the code below and put it in a file called `index.js`

```node
function main() {
  console.log("hello world!");
}
main();
```

If you haven't opened up your shell you'll want to do that now. I'm on a Mac so I'll open the `Terminal` program. If your on linux it should be pretty similar. If your on window I'm sorry.

> Jk windows users, but I have no idea how to do this in windows. If someone can give me some instructions on this I'll add them here

some stuff on terminal basics here like `pwd` `ls` `cd` `echo` `path`

run the following in the terminal

```bash
-> node index.js
```

you should see

```bash
hello world!
```

explain what is up if node doesn't work for some reason. Also do a sanity check of why node might not be showing up.

That's the most atomic unit of running code on your local machine. This process pretty much the same for all languages. When you click that green play button in your nice IDE or text editor this is most likely what is happening behind the scenes.

## Text Editor World 🤩

Lets talk about cool tools now. For the follow I'm going to use the word Text Editor and IDE interchangably. Also, I'm going use TE for Text Editor. Text Editors give us a bunch of tools + configuration to supercharge our development and make things easier for us. Many give syntax hightlighting when you've written something wrong in your code, autocompletion, easy code searching, visual git support, a file explorer, integrated shell, and much more + the ability to download 3rd party packages to extend the original capabilites of the text editor soooooo basically unlimited customization. For this article we are going to use [Visual Studio Code](https://code.visualstudio.com/). Go ahead and download it. Again should be pretty straight forward.

> If downloading visual studio code is not straight forward let me know and I can ammend this article.

### Visual Studio Code 😎

> I'm going to refer to Visual Sudio Code as VS Code going forward

Visual Studio code has amazing support for javascript out of the box so there isn't really anything that we need to do for Node. Go ahead and open our `index.js` file in VS Code.

> !! explain how to open in vs code !!

Alright at this point we have paralleled anything in CodeAcademy or Repl.it. You should be ready to code to your hearts content at this point!

### What if I didn't learn Node js

well if you didn't learn Node js don't fret friend! VS Code has a whole bunch of plugins you can get. There's some for you language of choice.

Learned Java? there's an extension (but if )
Learned Python? There's an extension
Learned Go? There's an extension
You get the picture.

### Conclusion

what to do next? Keep programming commrade! Enjoy the fruits of your labor. One thing this article didn't go over was package managers. I'll cover those in my next article and I'll continue with the node theme, we'll be using Yarn and NPM.

As always I'm not perfect and I'd love feedback on this article and suggestions for what to talk about next. Let me know!

Peace!
