<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<h1 align="center"><em>Learning TypeScript</em> Projects</h1>

<p align="center">Hands-on real world projects that will help you exercise your knowledge of TypeScript.</p>

<p align="center">
	<img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-14cc21.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-14cc21.svg" />
	<a href="https://github.com/LearningTypeScript/projects/actions/workflows/solutions.yml">
		<img alt="Build Status: Build Passing" src="https://github.com/LearningTypeScript/projects/actions/workflows/solutions.yml/badge.svg" />
	</a>
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors-">
  		<img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-2-14cc21.svg" />
	</a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

<img align="right" alt="Learning TypeScript title with a sun conure and O'Reilly logo" height="176px" src="./cover-conure.png" width="176px">
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
Welcome to the repository housing all of the projects for _Learning TypeScript_!
I'm excited you're here -- whether you're using the projects to practice as you read the book, or just browsing.

## Setup

Clone the repository to your computer, then run `npm install` to install packages.

```shell
git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
cd learning-typescript-projects
npm install
```

Assuming that all succeeded, you're now ready to work on any and all projects! 🚀

### Starting on Projects

<!-- TODO: switch to the first project they'd ever need to work on -->

Projects are located under the name of their chapter, such as `arrays/analyzing-dna`.
Each has their own README.md with instructions on the commands to run from within that directory.

> Don't forget to `cd` into a project's directory before running its commands!

### Types of Projects

Each project follows a chapter in the Learning TypeScript book and aligns to one of the following three categories:

- 🥗 Appetizers: bite-sized directed warmups: set of independent mini-projects
- 🍲 Entrees: larger, more hands-off challenge: a single self-contained project
- 🍰 Desserts: the same structure as entrees, with a fun thematic twist

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

El libro esta distribuido en 3 secciones:

Part I, “Concepts”: How JavaScript came to be, what TypeScript adds to it, and
the foundations of a type system as TypeScript creates it.

• Part II, “Features”: Fleshing out how the type system interacts with the major
parts of JavaScript you’d work with when writing TypeScript code.

• Part III, “Usage”: Now that you understand the features that make up the Type‐
Script language, how to use them in real-world situations to improve your code
reading and editing experience.

De aca en adelante se presenta un resumen por capitulos de libro:

## Concepts

### Chapter 01: Pasando de javascript a typescript

Este capiluto hace una pequeña reseña de javascript y como se hace necesario utilizar un control de tipado

TypeScript allows us to specify what types of values may be provided for parameters and variables.

You may protest that modern IDEs such as VS Code do provide some development tools such as automated refactors to JavaScript. True, but: they use TypeScript or an equivalent under the hood for many of their JavaScript features, and those development tools are not as reliable or as powerful in most JavaScript code as they are in well-defined TypeScript code.

#### TypeScript is four things

**Programming language:**
A language that includes all the existing JavaScript syntax, plus new TypeScript specific syntax for defining and using types.

**Type checker**
A program that takes in a set of files written in JavaScript and/or TypeScript,
develops an understanding of all the constructs (variables, functions…) created,
and lets you know if it thinks anything is set up incorrectly.

**Compiler**
A program that runs the type checker, reports any issues, then outputs the
equivalent JavaScript code.

**Language service**
A program that uses the type checker to tell editors such as VS Code how to
provide helpful utilities to developers.

#### TypeScript's advantages

freedom through restriction, precise documentation, and stronger developer tooling

#### What TypeScript is not

A remedy for bad code, extensions to JavaScript (mostly), slower than JavaScript, or finished evolving
