# Episode 01 - Assignment / Task

Now build the project yourself instead of just watching me do it.

## Task 1 — Create the Project

```shell
mkdir typescript-learning
cd typescript-learning
npm init -y
npm install --save-dev typescript
```

Confirm the installed compiler version with:

```shell
npx tsc --version
```

## Task 2 — Create Your First Program

Create src/index.ts with:

```ts
const userName: string = "Your Name";
const age: number = 25;
console.log(`Hello ${userName}, you are ${age} years old.`);
```

Compile it and run the generated JavaScript.

## Task 3 — Create tsconfig.json

Initialize the project configuration:

```shell
npx tsc --init
```

Then configure it so your source is under src and your generated JavaScript goes under dist.

## Task 4 — Break the Type System

Change:

```ts
const age: number = 25;
```

to:

```ts
const age: number = "twenty-five";
```

Run the compiler and read the error carefully. Do not fix it immediately. First explain in your own words what TypeScript is protecting you from.

## Task 5 — Watch Mode

Add a development script:

```shell
"dev": "tsc --watch"
```

Run it, modify src/index.ts, and observe the generated output update.

## Bonus Challenge

Write down the answers to these five questions without looking back at the video:

- What is the difference between TypeScript and the JavaScript runtime?
- What does tsc do?
- Why do we keep TypeScript as a dev dependency?
- What problem does tsconfig.json solve?
- Why is a project-local TypeScript version useful?
