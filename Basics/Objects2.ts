type User={
    readonly _id: string,
    name: string,
    age: number,
    isActive: boolean,
    email: string
}

let user: User={
    _id: 'abc123',
    name: 'John',
    age: 25,
    isActive: true,
    email: 'abhas.jaiswal@gmail.com'
}

// if we try to change the id then it will throw an error 
// user._id='xyz123' // Cannot assign to '_id' because it is a read-only property.ts(2540)

user._id='xyz123' // This will throw an error because _id is a readonly property.

// Now we might want to put some properties as optional. We can do that by adding a '?' after the property name.
type User1={
    readonly _id: string,
    name: string,
    CardDetails?: number,
    isActive: boolean,
    email: string
}

let user1: User1={
    _id: 'abc123',
    name: 'John',
    isActive: true,
    email: 'abhas.jaiswal@gmail.com'
}

// As you can see that we have not provided the CardDetails property. This will not throw an error because it is optional.

// We can also combine two types to create a new type.

type CardDetails={
    cardNumber: number,
    cardHolderName: string
}

type User2={
    readonly _id: string,
    name: string,
    CardDetails?: CardDetails,
    isActive: boolean,
    email: string
}

type Details= User2 & CardDetails // This will combine the properties of both the types.

 