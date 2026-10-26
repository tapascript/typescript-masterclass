# Episode 07 - Assertions vs Satisfies

In this episode, we will learn about the Assertions vs Satisfies.

## Lessons Covered

TBA

## Type Assertions Vs. Satisfies

| Feature | `as` (Type Assertion) | `satisfies` (Type Validation) |
| --- | --- | --- |
| Philosophy | "Trust me, I know the type." (Overrides the compiler) | "Check me, do I match the type?" (Asks the compiler to verify) |
| Safety | Low safety. Can hide bugs or bypass missing properties. | High safety. Catches missing or wrongly typed properties immediately. |
| Type Inference | Forces the type to become exactly what you asserted. | Retains the narrowest, most specific literal values provided. |
| Direction | Downcasts/Upcasts type boundaries. | Validates an object against a broader contract structure. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.
