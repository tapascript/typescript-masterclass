// A primitive(or base) is a basic value that isn't an object.

//  JavaScript has primitive values such as
// 1. string
// 2. number
// 3. boolean
// 4. bigint
// 5. symbol
// 6. null
// 7. undefined.

// These become the building blocks for more advanced types such as

// objects
// unions
// generics
// and conditional types.

let name: string = "Tapas";
let age: number = 30;
let isLoggedIn: boolean = true;

// string
let firstName: string = "Tapas";
let message: string = 'Hello';
let greeting: string = `Welcome!`;

firstName.toUpperCase()


// number

let count: number = 10;
let price: number = 999.99;
let temperature: number = -5;
let score: number = 95.5;

// boolean

let isAdmin: boolean = true;
let hasPermission: boolean = false;

// string and String
let name1: String = new String("Alice");

// null and undefined

let result: null = null;
let value: undefined = undefined;

let username: string | null = getSavedUser(); // Might return null

if (username !== null) {
    username.toUpperCase()
}

// undefined

const users = ["A", "B"];
const user: string | undefined = users.find(name => name === "C");

// bigint

const hugeNumber: bigint = 9007199254740993n;

// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false

// The Special Types: any, unknown, void, never

// any

let someValue: any = "hello";
someValue.toUpperCase();
someValue.notARealMethod();
someValue.foo.bar.baz;

// unknown

let dynamicValue: unknown = "Hello World";

if (typeof dynamicValue === "string") {
    console.log(dynamicValue.toUpperCase());
}

// void

function logMessage(message: string): void {
    console.log(message);
}

// never

function keepAlive(): never {
    while (true) {
        console.log("Heartbeat...");
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

type Shape = "square" | "circle";

function getArea(shape: Shape) {
    switch (shape) {
        case "square":
            return 100;
        case "circle":
            return 314;
        default:
            // TypeScript knows 'shape' can only be square or circle.
            // Therefore, at this point, 'shape' is typed as 'never'.
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
