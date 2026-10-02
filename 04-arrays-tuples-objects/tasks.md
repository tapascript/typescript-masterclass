# Episode 04 - Assignment / Task

## Task 1 — Product Catalog

Create a Product type with id: number, name: string, price: number, category: string, tags: string[], and an optional discount: number. Then create an array containing at least five products.

## Task 2 — Make It Readonly

Make Product.id readonly. Try assigning a new id after creation and observe the compiler error.

## Task 3 — Tuple Challenge

Create an ApiResponse tuple representing an HTTP status code, response message, and success flag.

```ts
type ApiResponse = [number, string, boolean];
```

Create two valid responses and one invalid response.

## Task 4 — Optional Tuple

Create a coordinate tuple supporting either 2D or 3D coordinates.

```ts
type Coordinate = [number, number, number?];
```

Write a function that prints x and y and prints z only when it exists.

## Task 5 — readonly API

Create a function that accepts a readonly array of numbers and calculates the average. The function should not mutate the array.

## Task 6 — Refactor a Tuple

```ts
type User = [number, string, boolean];
function printUser(user: User) {
    console.log(user[0], user[1], user[2]);
}
```

Refactor this using an object type. Explain why the object version may be easier for another developer to understand.

## Bonus Challenge — Real API Model

Design types for an e-commerce order containing an order id, customer information, an array of products, an optional coupon code, a shipping address, and an order total. Create smaller reusable types such as
Customer, Product, Address, and Order.
