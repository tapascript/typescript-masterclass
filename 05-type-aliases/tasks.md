# Episode 05 - Assignment / Task

## Task 1 — User ID

Create a UserId type that accepts either a number or a string. Write printUserId() and handle both forms using narrowing.

## Task 2 — Theme

Create a literal union called Theme with "light", "dark", and "system". Create a function that accepts only those values.

## Task 3 — Order Status

Create an OrderStatus literal union containing "pending", "processing", "shipped", and "delivered".

## Task 4 — Payment Method

Model CardPayment and UpiPayment as separate object types. Combine them into a Payment union using a literal method property. Write a function that handles each safely.

## Task 5 — API Result

Create a discriminated union with loading, success with a list of users, and error with an error message. Write renderState() using switch.

## Task 6 — Array Challenge

Create one variable of type (string | number)[] and another of type string[] | number[]. Add valid and invalid examples and explain why the two types behave differently.

## Bonus — Shopping Cart State

Design a discriminated union for a shopping cart with states such as "empty", "ready", and "checkout". Each state should contain only the data that makes sense for that state.
