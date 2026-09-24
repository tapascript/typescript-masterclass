# Episode 03 - Base Types Primitives

In this episode, we will learn about the base types in TypeScript.

## Lessons Covered

- Introduction & Why Base Types Matter
- Core Primitives: string, number, and boolean
- Primitive Types vs Wrapper Objects (string vs String)
- null vs undefined & strictNullChecks
- Handling Nullable Types, Optional Chaining & Guards
- bigint and symbol
- The any Type: Pitfalls and Use Cases
- The unknown Type: Safe Alternatives to any
- The void Return Type
- The never Type & Exhaustive Type Checks
- Hands-on Coding Tasks & Challenges
- Summary & Next Steps

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
