"use strict";
// Syntax:
// let variableName: type = value;
Object.defineProperty(exports, "__esModule", { value: true });
var num = 10;
var student = {
    name: "John",
    age: 25,
};
var greetings = "Hello, World!";
console.log(num); // 10
console.log(student); // { name: 'John', age: 25 }
console.log(greetings); // Hello, World!
num = '20'; // Error: Type 'string' is not assignable to type 'number'.ts(2322)
num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)
greetings.toLowerCase();
// number 
var userId = 1242; // This is how you can define a number in TypeScript.
// Note that number takes both integer and floating point numbers.
// userId.methodName(); can be used to call methods on the number.
// Boolean 
var isLoggedIn = true; // This is how you can define a boolean in TypeScript.
// Note that boolean takes only true or false values.
// Type Inference
// TypeScript has a feature called type inference. This means that you don't have to explicitly specify the type of a variable. TypeScript will automatically infer the type based on the value assigned to the variable.
var num1 = 10; // TypeScript will infer the type as number
// Typescript will infer the type of the variable based on the value assigned to it.
