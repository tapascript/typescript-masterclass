# Episode 07 - Assertions vs Satisfies

In this episode, we will learn about assertions vs. satisfies.

## Lessons Covered

- Introduction & Advanced TypeScript Overview
- What is Type Assertion? (Compile vs Runtime)
- Syntax: The as Keyword vs Angle Brackets
- Practical Example: Typing DOM Elements Safely
- API Data Fetching: Typing Unknown JSON Payloads
- Impossible Assertions & Double Assertion (as unknown as T)
- Const Assertions: Deep Readonly & Literal Types with as const
- Practice Tasks & GitHub Repo
- What is the satisfies Operator? (Preserving Exact Types)
- Real-World Example: App Configuration & Union Types
- Summary & What’s Coming Next

## Type Assertions Vs. Satisfies

| Feature | `as` (Type Assertion) | `satisfies` (Type Validation) |
| --- | --- | --- |
| Philosophy | "Trust me, I know the type." (Overrides the compiler) | "Check me, do I match the type?" (Asks the compiler to verify) |
| Safety | Low safety. Can hide bugs or bypass missing properties. | High safety. Catches missing or wrongly typed properties immediately. |
| Type Inference | Forces the type to become exactly what you asserted. | Retains the narrowest, most specific literal values provided. |
| Direction | Downcasts/Upcasts type boundaries. | Validates an object against a broader contract structure. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.
