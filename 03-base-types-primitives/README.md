# Episode 03 - Base Types Primitives

In this episode, we will learn about the base types in TypeScript.

## Lessons Covered

- Introduction: TypeScript Masterclass (Episode 02)
- Course Resources, GitHub Repo & Discord Community
- Type Annotations vs. Type Inference Explained
- How to Write Type Annotations for Variables & Functions
- Return Type Annotations & Array Types
- Compile-time Type Checking (Real-World Analogy)
- How TypeScript Type Inference Works Under the Hood
- Intuitive Real-Life Analogy for Type Inference
- Uninitialized Variables: `let` vs. `const`
- Why Function Parameters Don't Infer (Implicit `any` Danger)
- When to Use Explicit Return Types (API Contracts & Guards)
- Flow Inference & Object Type Inference
- What is Contextual Typing in TypeScript?
- Contextual Typing with DOM Events & Arrays
- Best Practices: When to Annotate vs. When to Infer
- What’s Coming Next in the Masterclass!

## Quick Decision Guide

| Situation | Usually use |
| --- | --- |
| Text string | `string` |
| Normal JavaScript number | `number` |
| `true` / `false` | `boolean` |
| Very large exact integer | `bigint` |
| Unique primitive identity | `symbol` |
| Explicitly absent value | `null` |
| Missing / not provided | `undefined` |
| Unknown external data | `unknown` |
| Function with no useful return | `void` |
| Code path that cannot complete normally | `never` |
| Avoiding type checking | `any` — use sparingly |

## Useful Feature Comparisons

### 1. string VS. String

| Feature | `string` (Lowercase) | `String` (Uppercase) |
| --- | --- | --- |
| Type Category | Primitive | Object (Wrapper) |
| Memory Allocation | Saved directly on the stack (Highly efficient) | Stored on the heap (Higher overhead) |
| Usage Recommendation | Always use this | Avoid entirely for typing |
| Example Declaration | `let name: string = "Alice";` | `let name: String = new String("Alice");` |

### 2. any VS. unknown

| Feature | `any` | `unknown` |
| --- | --- | --- |
| What can be assigned into it? | Anything (strings, objects, functions, etc.) | Anything (strings, objects, functions, etc.) |
| What can it be assigned to? | Any other type (except `never`) | Only to `unknown` or `any` |
| Can you read properties/methods? | Yes, completely unchecked (Highly dangerous) | No, blocked until you prove the type |
| Safety Level | 🔴 Unsafe (Bypasses the compiler) | 🟢 100% Type-Safe |

### 3. void VS. any VS, never

| Type | What it actually means | Real-world example |
| --- | --- | --- |
| `void` | The function completes, but returns no useful data. | `console.log()` |
| `any` | The value could be absolutely anything. Turn off safety rules. | Migrating messy legacy JS code. |
| `never` | The value cannot exist / The code path cannot be reached. | Functions that crash or loop forever. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.
