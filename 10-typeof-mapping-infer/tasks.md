# Episode 10 - Assignment / Task

Try solving these three challenges in your TypeScript Playground or code editor before checking the solutions with AI.

## Challenge 1: The Menu (keyof)

Goal: You have a Product interface. Write a generic function updateField that takes a product object, a valid key from that product, and a new value matching that key's exact type.

```ts
interface Product {
  id: string;
  title: string;
  price: number;
  inStock: boolean;
}

// TODO: Fix the parameter types using generics and 'keyof'
function updateField(product: any, key: any, newValue: any) {
  product[key] = newValue;
  return product;
}

// Test Cases (Uncomment to verify your work)
const laptop: Product = { id: "p1", title: "ProBook", price: 1200, inStock: true };

// updateField(laptop, "price", 999);      // Should succeed
// updateField(laptop, "price", "free");   // Should show a Type Error!
// updateField(laptop, "discount", 20);    // Should show a Type Error!
```

## Challenge 2: The Renovation (Mapping Modifiers)

Goal: Create a custom utility type called DraftVersion`<T>` that takes any interface, removes readonly from all properties, and makes every property optional (?) so users can save incomplete drafts.

```ts
interface BlogPost {
  readonly id: number;
  readonly author: string;
  title: string;
  content: string;
}

// TODO: Build the 'DraftVersion' mapped type
type DraftVersion<T> = {
  // Write your mapped type here
};

// Test Case
type DraftPost = DraftVersion<BlogPost>;

const myDraft: DraftPost = {
  title: "Learning TypeScript"
  // Should allow missing 'id', 'author', and 'content'
};
// myDraft.id = 42; // Should allow modifying 'id' without a readonly error!
```

## Challenge 3: The Claw Machine (infer)

Goal: Write a utility type ArrayElement`<T>` that checks if T is an array. If it is, use infer to extract and return the type of the items inside that array. Otherwise, return never.

```ts
// TODO: Implement 'ArrayElement' using conditional types and 'infer'
type ArrayElement<T> = unknown;

// Test Cases
type StringItem = ArrayElement<string[]>;         // Should evaluate to: string
type UserItem = ArrayElement<{ id: number }[]>;   // Should evaluate to: { id: number }
type InvalidItem = ArrayElement<number>;          // Should evaluate to: never
```
