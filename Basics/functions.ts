function addTwo( num){

    num.toUpperCase() //  I am allowed to call string methods on num because the type of num is any.
    return num + 2;
}

addTwo(5) // the type of the parameter is not defined. It can be any type.
// this isn't a good practice. As if we go inside the function and let's say we add a string method to num and it will work because it is of the type any which shouldn't happen.

// The whole idea about types is to catch errors at compile time. If we don't define the type of the parameter, we are not catching any errors at compile time.


// In order to fix the above problem we can define the type of the parameter as number.

function addTwo1( num: number){

    num.toUpperCase() //  Error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)

    return num + 2;
}

addTwo1(5)

function getupper(name: string){
    return name.toUpperCase();
}

getupper('john') // This will work because the type of the parameter is defined as string.


function signUpUser(email: string, name: string, isPaid: boolean){
    console.log(email, name, isPaid);
}

console.log(signUpUser('abhas.jaiswal097@gmail.com', 'Abhas',true)) // This will work because the type of the parameters are defined.  

// Arrow functions in TypeScript

let loginUser = (email: string, password: string,isLoggedIn: boolean) => {
    console.log(email, password);
}

loginUser('abhas.jaiswal0907@gmail.com', 'helloworld123')
// The issue here is that we did not provide the third parameter which is required. This will not throw an error in JavaScript but it will throw an error in TypeScript.

// Default parameters in TypeScript 
// To prevent the above behaviour, we can provide a default value to the parameter. 

let loginUser1 = (email: string, password: string,isLoggedIn: boolean = false) => {
    console.log(email, password);
}

loginUser1('abhas.jaiswal0907@gmail.com', 'helloworld123')
// This will work because we have provided a default value to the third parameter.

// Return type in TypeScript
// We can also define the return type of the function in TypeScript.

function add(a: number, b: number): number {
    return a + b;
    // return "hello" // If we hadn't specified the return type as number it would have worked but now it will throw an error.
}


const heros=['thor', 'ironman', 'captain america'];

heros.map((hero ) => { // Typescript automatically infers the type of the parameter as string.
    return hero.toUpperCase(); // This will work because the return type of the function is string. TypeScript will infer the return type of the function based on the return value.
})

// similary if we have herso as numbers 
const numbers=[1,2,3,4,5];

numbers.map((num ) => { // Typescript automatically infers the type of the parameter as number.
    return num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)
})

// But it's always a good practice to define the type of the parameter and the return type of the function.

function ConsoleError(message: string): void {
    console.log(message);
}

function HandleError(message: string): never{
    throw new Error(message);
}

// never is used when the function never returns anything. It is used when the function throws an error or goes into an infinite loop.
// void is used when the function returns nothing. 
