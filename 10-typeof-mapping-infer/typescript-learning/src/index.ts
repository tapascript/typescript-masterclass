interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; //  "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const student = { id: 101, name: "Rohan", email: "rohan@example.com" };

getProperty(student, "name");
getProperty(student, "age");


// Our incoming API data: locked and optional
type ApiUser = {
  readonly id: string;
  name?: string;
  bio?: string;
};

type EditableUser<T> = {
    -readonly [K in keyof T]-?: T[K];
}

type UserForm = EditableUser<ApiUser>


type UnwrapBox<T> = T extends Promise<infer U> ? U : T;

type ApiPromise = Promise<{ orderId: number; status: string }>;

type OrderData = UnwrapBox<ApiPromise> // { orderId: number; status: string }


function fetchUserSettings() {
  return { darkMode: true, language: "en" };
}
type GrabReturn<T> = T extends (...args: any[]) => infer R ? R : never;
type Settings = GrabReturn<typeof fetchUserSettings>; //  { darkMode: boolean; language: string }
