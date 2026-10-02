// Arrays

const products = [
    "Laptop",
    "Keyboard",
    "Mouse"
];

const names: string[] = ["John", "Jane", "Alex"];
const scores: number[] = [90, 85, 100];
const flags: boolean[] = [true, false, true];

names.push("tapas")
// names.push(123)

const allNames: Array<string> = ["John", "Jane"];
const allScores: Array<number> = [90, 85, 100];

//const items = [];
const items: string[] = [];

// Readonly

function printNames(names: readonly string[]) {
    console.log(names.join(", "));
    //  names.push("John"); // Error
}

const mixedArray: (string | number | boolean)[] = ["Alice", 30, true, 25, "Bob"];

mixedArray.push("Charlie");
mixedArray.push(40);
mixedArray.push(false);
// mixedArray.push(new Date());


// Object Types
const user = {
    id: 1,
    name: "John",
    active: true
};

type User = {
    id: number;
    name: string;
    active: boolean;
}

const user1: User = {
    id: 1,
    name: "tapas",
    active: false
}

function printMyUser(user: User) {
    console.log(user.active)
}

// Optional Object Properties
type Emp = {
    readonly id: number;
    name: string;
    nickname?: string;
};

const emp1: Emp = {
    id: 1,
    name: "aleix"
}

console.log(emp1.id)
// emp1.id = 2;

const emp2: Emp = {
    id: 1,
    name: "aleix",
    nickname: "al"
}

function printNickname(emp: Emp) {
    if (emp.nickname) {
        console.log(emp.nickname.toUpperCase());
    }
}

// Nested Object Types
type Address = {
    city: string;
    country: string;
}

type Artist = {
    name: string,
    address: Address
}

const address1: Address = {
    city: "Bengaluru",
    country: "India"
}
const artist1: Artist = {
    name: "Jack",
    address: address1
}
console.log(address1.city)

// Array and Objects Together

type Product = {
    id: number;
    name: string;
    price: number;
};

const myProducts: Product[] = [
    { id: 1, name: "Laptop", price: 100000 },
    { id: 2, name: "Keyboard", price: 5000 }
]

myProducts.push({
    id: 3,
    name: "Mouse",
    price: "1500"
});

// Excess Proprty Check
type Dept = {
    id: number;
    name: string;
};

function saveDept(dept: Dept) {
    // Save here
}

saveDept({
    id: 1,
    name: "Finance",
    address: "India"
})

// Structural Typing
type Point = {
    x: number;
    y: number;
};

const coordinates = {
    x: 10,
    y: 20,
    label: "origin"
};

function printPoint(point: Point) {
    console.log(point.x, point.y)
}

printPoint(coordinates)

// Tuples

const address: [string, number] = ["Bengaluru", 560001];

const userEntry: [string, number] = ["John", 30];

const someName = userEntry[0];
const someAge = userEntry[1];

type Coordinate = [number, number, number?];

const point2D: Coordinate = [10, 20];
const point3D: Coordinate = [10, 20, 30];
const point4D: Coordinate = [10, 20, 30, 40];

// Rest Example
type Command = [string, number, ...boolean[]];

const a: Command = ["save", 1];
const b: Command = ["save", 1, true];
const c: Command = ["save", 1, true, false, true];

type BOX = readonly [number, number];
const box: BOX = [10, 20];
box[0] = 30; // Error



// Custom hook returning a tuple: [value, updaterFunction]
function useToggle(initialValue: boolean): [boolean, () => void] {
    let state = initialValue;
    const toggle = () => { state = !state; };
    return [state, toggle];
}

// Consuming with destructuring
const [isModalOpen, toggleModal] = useToggle(false);



type ApiResponse = [statusCode: number, statusMessage: string];

const response: ApiResponse = [404, "Not Found"];



const { data: userList, loading: isUserLoading } = useFetch("/users");
const { data: itemList, loading: isItemLoading } = useFetch("/items");

const [users, isUserLoading] = useFetch("/users");
const [items, isItemLoading] = useFetch("/items"); 