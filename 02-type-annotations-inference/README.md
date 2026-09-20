# Episode 02 - Type Annotations & Type Inference

In this episode, we will learn about Type Annotations & Type Inference.

## Lessons Covered

- 00:00 - Introduction: TypeScript Masterclass (Episode 02)
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

## When to use Type Annotation and Inference

| Scenario / Code Context | Use Inference | Use Annotation | Why? |
| :--- | :---: | :---: | :--- |
| **Simple Local Variables** <br>`const count = 10;` | **Yes** | ❌ | TypeScript already knows the exact type from the value. Annotations just add clutter. |
| **Uninitialized Variables** <br>`let data;` | ❌ | **Yes** | Without an initialization value, TypeScript defaults to `any`. You must declare the intended type. |
| **Function Parameters** <br>`function greet(name) {}` | ❌ | **Yes** | TypeScript cannot look ahead to guess what arguments will be passed into a function. |
| **Function Return Types** <br>`function getAge(): number` | Optional | **Best Practice** | It creates a strict contract. If you accidentally change the logic inside the function, TypeScript will alert you immediately. |
| **Inline Callbacks / Array Methods** <br>`items.map(x => x)` | **Yes** | ❌ | **Contextual typing** takes care of this automatically by looking at the parent array's type. |
| **Object Literals (Strict Forms)** <br>`const user: User = { ... }` | ❌ | **Yes** | Prevents spelling mistakes in keys and stops you from accidentally adding extra, invalid properties. |
| **Destructuring** <br>`const { id } = product;` | **Yes** | ❌ | The properties are pulled directly from a typed object, so their types carry over automatically. |
| **Dynamic Web APIs / JSON** <br>`JSON.parse(string)` | ❌ | **Yes** | Functions like `JSON.parse` or `fetch` return `any`. You must manually cast or annotate them to regain safety. |

## Task Assignment

Please find the detailed assignment and tasks in the [tasks.md](tasks.md) file.
