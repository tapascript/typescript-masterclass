# Episode 04 - Arrays, Tuples & Object Types

In this episode, we will learn about arrays, Tuples & Object Types.

## Lessons Covered

- Introduction & Prerequisites
- Understanding Arrays in TypeScript
- Type Inference vs. Explicit Types for Arrays
- Array Methods & Immutability
- Alternative Syntax: Generics
- Defining Empty Arrays
- Readonly Arrays
- Union Types in Arrays (Mixed Arrays)
- Introduction to Object Types
- Custom Types using `type` Keyword
- Optional Properties in Objects (`?`)
- Readonly Object Properties
- Nested Object Types
- Combining Arrays and Objects
- Excess Property Checks
- Structural Typing Explained
- What are Tuples? (Tuples vs Arrays)
- Optional Elements in Tuples
- Rest Elements in Tuples
- Readonly Tuples
- Real-World Use Case: React Custom Hooks & Tuples
- Real-World Use Case: API Responses
- Tuples vs Objects in Custom Hooks
- Tasks, Assignments & Wrap-Up

## Tuple VS. Array VS. Object Type

| Feature | Tuple | Array | Object Type |
| --- | --- | --- | --- |
| Length | Fixed (unless explicit rest flags) | Dynamic (can change sizes) | Fixed keys, arbitrary data sizing |
| Element Types | Can be completely different per slot | Uniform (or a single broad union) | Tied to unique named property keys |
| Access Method | By numerical index (`[0]`) | By numerical index (`[i]`) | By property name (`.key`) |
| Best Used For | Small, ordered, positional pairs | Infinite lists of identical things | Complex data with descriptive labels |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.
