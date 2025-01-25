// TypeScript is a **superset of JavaScript** that adds **static typing** to help catch errors during development. Unlike JavaScript, it allows you to define types (e.g., `string`, `number`) for variables, functions, and objects, making code **easier to debug and maintain**. TypeScript code is transpiled into plain JavaScript to run in browsers.
// In JavaScript , if we simply add 2 with '2' , it will result in '22' whch shouldn't happen. But in TypeScript, it will throw an error.
// TypeScript is not what you think
// What is TypeScript?
// TypeScript does: Static Checking
// what is static checking? - It is a process of verifying the type of the variable at compile time.
// Basically, Analyse the code as we type it. That's it.
// It's a development tool, your project stil runs on JavaScript.
// It just helps you to write code with less problems , better code quality and less bugs.
var userDetails = {
    name: "John",
    age: 25,
};
// userDetails.email  // This will throw an error as email is not defined in the object.
// This is the difference between JavaScript and TypeScript. In JavaScript, it will not throw an error.
console.log(userDetails.email);
