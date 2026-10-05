// Multuple Type Values

// 1. A user ID might arrive from one system as a number, while another system sends it as a string.
// 2. An order might be pending, shipped, or delivered.
// 3. A payment might be made by a card, UPI, or bank transfer.

// Union types

/*const userId = 101;
const anotherUserId = "USR-101";*/


let userId: string | number;

userId = 101;
userId = "USR-101";

// userId = true;

// Narrowing a Union

function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(0));
    }
}

printId("USR-101");
printId(101);
// printId(false);

let value: string | number = 42; // "42"

// Literal Types

let direction: "left" | "right";
direction = "left";
direction = "right";

// direction = "up";

let status: string;

status = "pending";
status = "success";
status = "banana";

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

let newStatus: OrderStatus = "delivered";

// newStatus = "banana"

type Signal = "red" | "yellow" | "green";

function setSignal(signal: Signal) {
    console.log(`Signal is ${signal}`);
}
setSignal("red")
// setSignal("black")

// Type Aliases

type UserId = string | number;

let id1: UserId = 101;
let id2: UserId = "USR-101";

type User = {
    id: UserId;
    name: string;
    email: string;
};
const user: User = {
    id: 1,
    name: "Tapas",
    email: "tapas@example.com",
};

function getUser(id: UserId): User {
    return {
        id,
        name: "Ada",
        email: "ada@example.com",
    };
}

type CardTransfer = {
    method: "card";
    cardLast4: string;
};

type BankTransfer = {
    method: "bank";
    accountNumber: string;
};

type Payment = CardTransfer | BankTransfer;

let myPayment: Payment = {
    method: "card",
    cardLast4: "12322"
}

function describePayment(payment: Payment) {
    if (payment.method === "card") {
        console.log(`Card ending in ${payment.cardLast4}`);
    } else {
        console.log(`Bank account ${payment.accountNumber}`);
    }
}


function findUserName(userId: number): string | null {
    if (userId === 1) {
        return "Ada";
    }
    return null;
}

const myName = findUserName(2);

if (myName !== null) {
    console.log(myName.toLocaleLowerCase())
}

// Arrays and Unions
type MixedValues = (string | number)[];
type HomogeneousValues = string[] | number[];

const a: MixedValues = ["Ada", 42, "TypeScript"];
const b: HomogeneousValues = ["Ada", "TypeScript"];
const c: HomogeneousValues = [10, 20, 30];

const d: MixedValues = ["Ada", 42];


// Union vs Intersection
// & |

type BasicUser = {
    name: string;
};
type Employee = {
    employeeId: number;
};

type UserOrEmployee = BasicUser | Employee;
type UserAndEmployee = BasicUser & Employee;

// | means OR: the value can satisfy one member of the union.
// & means AND: the value must satisfy both types.


// Real-World Example - Payment Method

type CardPayment = {
    method: "card";
    amount: number;
    cardLast4: string;
};

type UpiPayment = {
    method: "upi";
    amount: number;
    upiId: string;
};

type BankPayment = {
    method: "bank";
    amount: number;
    accountNumber: string;
};

type CustomPayment = CardPayment | UpiPayment | BankPayment;

function processPayment(payment: CustomPayment) {
    switch (payment.method) {
        case "card":
            console.log(`Charging card ${payment.cardLast4}`);
            break;
        case "upi":
            console.log(`Charging UPI ${payment.upiId}`);
            break;
        case "bank":
            console.log(`Processing bank account ${payment.accountNumber}`);
            break;
    }

}

// API State
type ApiState =
    | { status: "loading" }
    | { status: "success"; data: User[] }
    | { status: "error"; message: string };

function render(state: ApiState) {
    switch (state.status) {
        case "loading":
            return "Loading...";
        case "success":
            return `Users: ${state.data.length}`;
        case "error":
            return `Error: ${state.message}`;
    }
}