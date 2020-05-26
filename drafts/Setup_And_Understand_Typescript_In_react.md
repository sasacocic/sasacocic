# Setup and Understand typescript in React Projects

I'm someone who likes to understand what I'm doing from the ground up. When I initally started using typescript I needed for my job and I just need to write code to get features done. One thing I didn't do was try and understand it from first principles. In this post we'll explore typescript from first priciples. What does that mean? For the sake of this article it means

1. how to set up typescript on it's own.
1. How to meaningfully integrate ts into a React project.

Let's get started!

> For the rest of the article I'll refer to typescript as ts

## Typescript config

Lets setup our project a bit. Create a dir, make index.ts file, init that dir as a yarn project, get ts as a dep

Ts is like any other node/yarn package. You can download it with

```yarn
yarn add -D typescript
```

Cool now we have the ts compiler. Now we can write some basic TS in `index.ts`

```typescript
function getHelloWorld(): string {
  return "Hello, World";
}

function main(): void {
  let helloWorld = getHelloWorld();
  console.log(helloWorld);
}
main();
```

```bash
Hello, World
```

So we

1. downloaded the compiler
2. used it to produce a .js file
3. ran the file

Awesome! You can figure this out from the ts landing page, but one thing that isn't as easy to get and understand initally (at least it wasn't for me) is config. `tsconfig.json` functions a lot like `package.json`. It signifies the root of the typescript project allows for configuration of it.

...There are a lot of config options we don't have time to go over all of them, but I recommend taking a look at

[ref](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[ref1](https://www.typescriptlang.org/v2/en/tsconfig)

### How to configure for a React Project

So now we've played with typescript a bit and understand `tsconfig`. If you've ever set up a React project from scratch it's actually the same thing. The only thing that you need to do is add a a loader for TS files and create a config file for TS to tell it that you'll be using typed react.

**TODO**: show webpack config where you link the tsconfig file

**pitfalls**: if you use vscode and you use a different file other than `tsconfig.json`, vscode still tries to use `tsconfig.json`

### Thoughts

I think why webpack can be so confusing to beginners is because what it does in a react app isn't explained simpily enough. For the most part webpack reads a file does certain processe on it (loaders, etc) then produces new files. TS pretty much does the samething. It reads a file and produces a new file.
