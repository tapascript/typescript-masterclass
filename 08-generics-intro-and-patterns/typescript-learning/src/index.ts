function setCounter(counter: number) {
    console.log(counter)
}

setCounter(8)
setCounter(12)

const arrNum: number[] = [2, 4, 5, 6];
const arrStr: string[] = ["a", "b", "c", "d"];

function getFirstNumber(): number | undefined {
    return arrNum[0];
}

function getFirstString(): string | undefined {
    return arrStr[0];
}

function getFirstItem<T>(arr: T[]): T | undefined {
    return arr[0];
}

getFirstItem(arrStr);
getFirstItem(arrNum);

interface ApiResponse<DataShape> {
    status: "success" | "error";
    data: DataShape,
    message: string;
}

interface User {
    id: number,
    name: string
}

interface Product {
    id: number,
    name: string,
    stock: number
}

const userResponse: ApiResponse<User> = {
    status: "success",
    data: { id: 1, name: "tapas" },
    message: "User fetched Successfully!"
}

const productResponse: ApiResponse<Product> = {
    status: "success",
    data: { id: 1, name: "mouse", stock: 32 },
    message: "User fetched Successfully!"
}



interface HasLength {
    length: number;
}

function logLenth<T extends HasLength>(item: T): void {
    console.log(`Length is: ${item.length}`)
}

logLenth("tapas")
logLenth([2, 3])
// logLenth(23)



type Employee = {
    id: number;
    name: string;
};
function firstItem<T>(items: T[]): T | undefined {
    return items[0];
}
function identity<T>(value: T): T {
    return value;
}
function pair<T, U>(left: T, right: U): [T, U] {
    return [left, right];
}



const firstName = firstItem(["Tapas", "Nirmal"]);
const firstEmployee = firstItem<Employee>([
    { id: 1, name: "Mira" },
    { id: 2, name: "Arjun" },
]);
const selectedId = identity(42);
const userAndScore = pair(
    { id: 1, name: "Mira" },
    95
);

