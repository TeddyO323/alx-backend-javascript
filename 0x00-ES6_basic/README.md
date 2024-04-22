
# 0x00. ES6 Basics

## JavaScript ES6

![Arrays](images/08806026ef621f900121.png)


## Resources

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://262.ecma-international.org/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

**General:**

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup

Install NodeJS 12.11.x in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Check NodeJS and npm versions:

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint:

```bash
npm install
```

## Tasks

Each task has its own file in the project directory.

### 0. Const or let?
Modify functions to use const or let as appropriate.

### 1. Block Scope
Modify variables inside a function to avoid overwriting them in conditional blocks.

### 2. Arrow functions
Rewrite a standard function to use ES6’s arrow syntax.

### 3. Parameter defaults
Condense function internals to 1 line using default parameter values.

### 4. Rest parameter syntax for functions
Modify a function to return the number of arguments passed using rest parameter syntax.

### 5. The wonders of spread syntax
Using spread syntax, concatenate arrays and each character of a string.

### 6. Take advantage of template literals
Rewrite a return statement to use template literals for variable substitution.

### 7. Object property value shorthand syntax
Modify an object's properties to use shorthand syntax.

### 8. No need to create empty objects before adding in properties
Use ES6 computed property names to create object properties.

### 9. ES6 method properties
Rewrite a function to use ES6 method properties in an object.

### 10. For...of Loops
Rewrite a function to use ES6’s for...of operator.

### 11. Iterator
Write a function to create an object containing department names and employees.

### 12. Let's create a report object
Write a function to create a report object containing department names and employees, with a method to get the number of departments.

### 13. Iterating through report objects
Write a function to create an iterator object to go through every employee in every department.

### 14. Iterate through object
Write a function to return every employee name in a string, separated by '|'.

## Repo

GitHub repository: [alx-backend-javascript](../../alx-backend-javascript/)

Directory: 0x00-ES6_basic
```