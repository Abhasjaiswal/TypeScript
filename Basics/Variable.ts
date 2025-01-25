// Syntax:
// let variableName: type = value;

let num: number = 10;
let student: object = {
    name: "John",
    age: 25,
    }; 

let greetings: string = "Hello, World!";
 
console.log(num); // 10
console.log(student); // { name: 'John', age: 25 }
console.log(greetings); // Hello, World!

export {}; // To prevent error: Cannot redeclare block-scoped variable 'num'.ts(2451)


num='20' // Error: Type 'string' is not assignable to type 'number'.ts(2322)

num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)

greetings.toLowerCase(); 

// number 

let userId: number= 1242 // This is how you can define a number in TypeScript.

// Note that number takes both integer and floating point numbers.
// userId.methodName(); can be used to call methods on the number.


// Boolean 

let isLoggedIn: boolean = true; // This is how you can define a boolean in TypeScript.

// Note that boolean takes only true or false values.

// Type Inference
// TypeScript has a feature called type inference. This means that you don't have to explicitly specify the type of a variable. TypeScript will automatically infer the type based on the value assigned to the variable.

let num1 = 10; // TypeScript will infer the type as number

// Typescript will infer the type of the variable based on the value assigned to it.


// any 

let Hero;

function getHero() {
  return "thor";
}

let hero = getHero();
// when typescript cannot infer the type of the variable, it assigns the type 'any' to it.