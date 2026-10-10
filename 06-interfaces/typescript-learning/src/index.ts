// type aliases
type UserId = string | number;

type User = {
    id: UserId;
    name: string;
    email: string;
};

// Interfaces
interface AUser {
    id: number;
    name: string;
    email: string;
}

const user: AUser = {
    id: 11232,
    name: "tapas",
    email: "tapas@email",
}

// Interface and Type Alias — The Similarity

/*interface Product {
    id: number;
    name: string;
    price: number;
}*/

type ProductType = {
    id: number;
    name: string;
    price: number;
};

// The First Big Difference — What Can They Represent?

type Id = string | number;
type Status = "pending" | "success" | "error";
type Formatter = (value: string) => string;
type Pair = [string, number];

// Extending an Interface with extends

interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "Ada",
    employeeId: 101,
};


// Extending Multiple Interfaces

interface HasName {
    name: string;
}

interface HasEmail {
    email: string;
}

interface Contact extends HasName, HasEmail {
    phone: string
}

const contact: Contact = {
    name: "Ada",
    email: "ada@example.com",
    phone: "555-0100",
};

//Can Interfaces Extend Type Aliases?

type Animal = {
    name: string;
}

interface Mammal extends Animal {
    hands: number;
}

const human: Mammal = {
    name: "tapas",
    hands: 2
}

// Can a Type Alias Use an Interface?

interface UserProfile {
    name?: string;
    readonly email: string;
}

type AdminProfile = UserProfile & {
    adminSince: Date;
}

const admin: AdminProfile = {
    email: "ada@example.com",
    adminSince: new Date(),
}

// Classes and Interfaces

interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

const logger = new ConsoleLogger();
logger.log("Hello")

// A Practical Example


type ProductId = number | string;
type ProductStatus =
    | "draft"
    | "published"
    | "archived";
interface Product {
    id: ProductId;
    name: string;
    price: number;
    status: ProductStatus;
}
interface DigitalProduct extends Product {
    downloadUrl: string;
}
type PhysicalProduct = Product & {
    weightInGrams: number;
};
const ebook: DigitalProduct = {
    id: "EBOOK-101",
    name: "TypeScript Mastery",
    price: 49,
    status: "published",
    downloadUrl: "/downloads/typescript",
};
const keyboard: PhysicalProduct = {
    id: 101,
    name: "Mechanical Keyboard",
    price: 99,
    status: "published",
    weightInGrams: 850,
};