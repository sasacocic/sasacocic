# Setting up a dev enviornment for complete beginners📈

Date: May 15th 2020

So you just finished your first coding course on codecademy or you’ve been using an online IDE like repl.it. Now you're wondering how do I setup something similar on my own computer? In this post I’ll cover how you can do this with javascript (if your using another language it should be similar) and explain what’s going on at each step.

###### Have feedback? Reach me [@SasaCocic](https://twitter.com/SasaCocic)

# Heres what’s on the menu 🥗

1. Install node js (javascript) and talk about what’s going on
1. Chit Chat about text editors and how you get some sweet functionality on your local machine + all the tools they come with to help you develop and connect with your computer on a spiritual level.

## The short of it 👏

1. Open a shell _(wtf is a shell)_
1. Install and use your compiler or interpreter _(wtf is a compiler or interpreter)_ then pass in a file as an argument _(whaaaaat)_
1. Boom, you're up and running. Now you can use that bad boy to run a hello world program and your ready to ascend to programming greatness.
1. You understand the most basic step of starting a program! This is good, but you can do a lot better! Knowing how to run hello world is an indispensable tool. To supercharge your development you’ll want a good text editor or IDE (text editors these days really blur the lines between IDE and text editor) this is what’ll give you syntax highlighting, autocompletion, and a bunch of other cool features. 🚀

## The long of it 😾

Ok the short of it really wasn’t that helpful at all. So lets dig into these things so you know what’s going on! Alright lets install node, but wait wtf is node (The next part isn't mandatory, but it gives context).

#### Detour to javascript land 😥

Welcome to Javascript land. The lawless rootin tootin wild west of programming languages. Just like all programming langauges Javascript needs to be transformed from the text we see on the screen into binary (what our robot overlords understand i.e. 0's & 1's) so our computers can understand and execute it. Browsers like Firefox and Google know how to do this. Specifically Google Chrome's engine for doing this is called V8. V8 looks at javascript code and turns it into something a computer can understand. BOOM Binary. Now some smart people said lets take V8 + lets build a library to interact with your OS so people can write javascript outside of the browser (There's more to it than this, but for this article it suffices). That's essentially what node js is. I think of it as another enviornment to run javascript code. That's it!

#### Downloading Node JS 😤

If you go to [node js's website](https://nodejs.org/en/) you can download Node from there. Go ahead and download the one that says LTS (LTS stands for long term support). Follow those instructions and it should be pretty straight forward.

> If downloading node js isn't straight forward let me know and I will add instructions.

#### Using Node 🤔

Alright cool now we have Node installed on our machine. Lets write a hello world program! Copy the code below and put it in a file called `index.js`

```node
function main() {
  console.log("hello world!");
}
main();
```

If you haven't opened up your shell you'll want to do that now. I'm on a Mac so I'll open the `Terminal` program. If your on linux it should be pretty similar. If your on windows I'm sorry.

> Jk windows users, but I have no idea how to do this in windows. If someone can give me some instructions on this I'll add them here

run the following in the terminal

```bash
-> node index.js
```

you should see

```bash
hello world!
```

That's the most atomic unit of running code on your local machine! This process is pretty much the same for all languages. When you click that green play button in your nice IDE or text editor something like this is most certainly happening behind the scenes.

## Text Editor World 🤩

Lets talk about cool tools now. For the follow I'm going to use the word Text Editor and IDE interchangably. Text Editors give us a bunch of tools + configuration to supercharge our development and make our lives easy. Many give syntax hightlighting when you write incorrect code, autocompletion, easy code searching, visual git support, a file explorer, integrated shell, and much more + the ability to download 3rd party packages to extend the original capabilites of the text editor soooooo basically unlimited customization. For this article we are going to use [Visual Studio Code](https://code.visualstudio.com/). Go ahead and download it. Again, it should be pretty straight forward.

> If downloading visual studio code is not straight forward let me know and I can ammend this article.

### Visual Studio Code 😎

> I'm going to refer to Visual Sudio Code as VS Code going forward

VS Code has amazing support for javascript out of the box so there isn't really anything that we need to do for Node. Go ahead and open our `index.js` file in VS Code.

Alright at this point we have a set paralleling anything in CodeAcademy or Repl.it. You should be ready to code to your hearts content at this point!

### What if I didn't learn Node js

Well if you didn't learn Node js don't fret friend! VS Code has a whole bunch of plugins you can get. There's some for you language of choice.

Learned Java? there's an extension
Learned Python? There's an extension
Learned Go? There's an extension
You get the picture.

### Conclusion

what to do next? Keep programming commrade! Enjoy the fruits of your labor. One thing this article didn't go over was package managers and dependencies (e.g. yarn and npm). I'll cover those in my next article and I'll continue with the node theme, we'll be using Yarn and NPM.

As always I'm not perfect and I'd love feedback on this article and suggestions for what to talk about next. Let me know!

Peace!

###### follow me on twitter for updates and articles :smiley:

- Twitter - @SasaCocic
- Reddit - u/sasacocic
