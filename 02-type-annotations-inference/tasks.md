# Episode 02 - Assignment / Task

## Task 1 — Identify the Inferred Types

```ts
const name = "John";
const age = 30;
const isAdmin = false;
const scores = [10, 20, 30];
const user = {
    name: "John",
    age: 30,
    isAdmin: false
};
```

Before checking your editor, predict the type of every variable. Then hover over each one and compare your answer.

## Task 2 — Add Annotations

Rewrite the variables with explicit annotations. Then compare both versions and decide which annotations add useful information and which are redundant.

## Task 3 — Function Parameters

```ts
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

Make this function type-safe by adding the appropriate parameter annotations. Let TypeScript infer the return type.

## Task 4 — Contextual Typing

```ts
const names = ["John", "Jane", "Alex"];
names.forEach(name => {
    console.log(name.toUpperCase());
});
```

Hover over name. Explain how TypeScript knows its type without an explicit annotation.

## Task 5 — Find the Balance

Take a small piece of existing JavaScript code and convert it to TypeScript. Do not annotate everything.
Annotate only where the type is not obvious or where the annotation communicates an important contract. Then list which types were inferred and which you chose to annotate.

## Bonus Challenge

When should a TypeScript developer prefer inference, and when should they explicitly annotate a type?

Answer in your own words, without simply repeating the definitions from this video.
