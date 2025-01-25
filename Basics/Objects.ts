const User = {
    name: 'John',
    age: 25,
    isActive: true
}

function createUser({name:string , age:number, isActive:boolean}) {}

createUser({name: 'John', age: 25, isActive: true})
// odd behaviour of object in typescript
createUser({name: 'John', age: 25, isActive: true,email:'abhas.jaiswal@gmail.com'}) // notice that if we try to pass an extra parameter, it will throw an error.
// But there's a way we can prevent this behaviour.
// We can define the object as a type.
let newUser= {name:"Abhas", age: 25, isActive: true,email:'abhas.jaiswal@gmail.com'}
// if we pass the above object to the function, it will not throw an error.
createUser(newUser) 


// Function return type in TypeScript
function createCourse():{name:String,price: number}{
    return {name:'React', price:2999}
}

// type alias in typescript

type User = {
    name: string,
    age: number,
    isActive: boolean,
    email: string
}

function createNewUser(user:User):User{
    return user;
}
createNewUser({name: 'John', age: 25, isActive: true, email:'hello@gmail.com'   })
export {} 