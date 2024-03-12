<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
# Learning TypeScript

Welcome to the repository housing all of the projects for _Learning TypeScript_!
I'm excited you're here -- whether you're using the projects to practice as you read the book, or just browsing.

## Types of Projects

Each project follows a chapter in the Learning TypeScript book and aligns to one of the following three categories:

- 🥗 Appetizers: bite-sized directed warmups: set of independent mini-projects
- 🍲 Entrees: larger, more hands-off challenge: a single self-contained project
- 🍰 Desserts: the same structure as entrees, with a fun thematic twist

El libro esta distribuido en 3 secciones:

Part I, “Concepts”: How JavaScript came to be, what TypeScript adds to it, and
the foundations of a type system as TypeScript creates it.

• Part II, “Features”: Fleshing out how the type system interacts with the major
parts of JavaScript you’d work with when writing TypeScript code.

• Part III, “Usage”: Now that you understand the features that make up the Type‐
Script language, how to use them in real-world situations to improve your code
reading and editing experience.

De aca en adelante se presenta un resumen por capitulos de libro:

## Part 01 Concepts

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
