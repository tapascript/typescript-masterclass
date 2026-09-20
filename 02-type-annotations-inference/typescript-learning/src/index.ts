let name = "John";
// name=false
const age = 30; // Type Inference

const address: string = "Bengaluru" // Type Annotations

// const variableName: Type = value



function add(a: number, b: number): number {
    return a + b;
}
// add("tapas", "adhikary")

const scores: number[] = [10, 20, 30];

let count: number = 100;
// count = "something"

const zip = 30000;
const isLoggedIn = true;
const names = ["John", "Jane", "Alex"];

let x;

console.log("x", typeof x)

function greet(name: string) {
    return `Hello, ${name}`;
}


function calculateDiscount(price: number): number {
    return price * 0.2;
    // return `Discount: ${price * 0.2}`;
}

const price = 100;
const quantity = 2;
const total = price * quantity;

const user = {
    name: "John",
    age: 30,
    isAdmin: false
};

// Contextual Typing

// Regular Inference = Right => left
// Contextual Typing = Left => Right

document.addEventListener('click', (event) => {
  console.log(event.button);
});

document.addEventListener('scroll', (event) => {
  console.log(event.button);
});

const users = ["Alice", "Bob", "Charlie"];

// 'user' is automatically contextually typed as a 'string'
users.forEach(user => {
  console.log(user.toUpperCase()); // Safe and autocompleted!
});




// Annotation: Developer => TypeScript
// Inference: TypeScript => Developer


const p = 25;
const q = false;