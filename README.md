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

Este capiluto hace una pequeña reseña de javascript y como se hace necesario utilizar un control de tipado.

TypeScript allows us to specify what types of values may be provided for parameters and variables.

TypeScript permite especificar que tipo de types y valores se pueden proveer a parametros en caso de funciones o variables con el fin de siempre tener presente el tipo de data que fluye a travez de variables y funciones.

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

#### Caractersticas de typescript

Tener en cuenta que gracias al archivo tsconfig.json, la carpeta donde este se encuentre, sera reconocida como un projecto typescript.

#### TypeScript's advantages

freedom through restriction, precise documentation, and stronger developer tooling

#### What TypeScript is not

A remedy for bad code, extensions to JavaScript (mostly), slower than JavaScript, or finished evolving, typescript puede agregar un pequeno delay al compilar a viejo javascript pero solo si se compila

#### Summary

In this chapter, you read up on the context for some of JavaScript’s main weaknesses,
where TypeScript comes into play, and how to get started with TypeScript:

• A brief history of JavaScript
• JavaScript’s pitfalls: costly freedom, loose documentation, and weaker developer
tooling
• What TypeScript is: a programming language, a type checker, a compiler, and a
language service
• TypeScript’s advantages: freedom through restriction, precise documentation,
and stronger developer tooling
• Getting started writing TypeScript code on the TypeScript Playground and locally
on your computer
• What TypeScript is not: a remedy for bad code, extensions to JavaScript (mostly),
slower than JavaScript, or finished evolving

### Chapter 02 The Type System

Summary:

In this chapter, you saw how TypeScript’s type system works at its core:
• What a “type” is and the primitive types recognized by TypeScript
• What a “type system” is and how TypeScript’s type system understands code
• How type errors compare to syntax errors
• Inferred variable types and variable assignability
• Type annotations to explicitly declare variable types and avoid evolving any types
• Object member checking on type shapes
• ECMAScript module files’ declaration scoping compared to script files

### Chapter 03 Unions and Literals

In this chapter, you went over union and literal types in TypeScript, along with how
its type system can deduce more specific (narrower) types from how our code is
structured:

• How union types represent values that could be one of two or more types
• Explicitly indicating union types with type annotations
• How type narrowing reduces the possible types of a value
• The difference between const variables with literal types and let variables with
primitive types
• The “billion-dollar mistake” and how TypeScript handles strict null checking
• Using explicit | undefined to represent values that might not exist
• Implicit | undefined for unassigned variables
• Using type aliases to save typing long type unions repeatedly

### Chapter 04 Objects

In this chapter, you expanded your grasp of the TypeScript type system to be able to
work with objects:
• How TypeScript interprets types from object type literals
• Describing object literal types, including nested and optional properties
• Declaring, inferring, and type narrowing with unions of object literal types
• Discriminated unions and discriminants
• Combining object types together with intersection types

## Features

### Chapter 05 Functions

In this chapter, you saw how a function’s parameters and return types can be inferred
or explicitly declared in TypeScript:
• Declaring function parameter types with type annotations
• Declaring optional parameters, default values, and rest parameters to change type
system behavior
• Declaring function return types with type annotations
• Describing functions that don’t return a usable value with the void type
• Describing functions that don’t return at all with the never type
• Using function overloads to describe varying function call signatures
