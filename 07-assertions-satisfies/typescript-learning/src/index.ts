// A Type Assertion tells the TypeScript compiler: "Trust me, I know more about the shape of this data than you do."

// Syntaxes
let element1 = document.getElementById("canvas") as HTMLCanvasElement;

let element2 = <HTMLCanvasElement>document.getElementById("canvas");

const input = document.getElementById("user-email") as HTMLInputElement;

console.log(input.value);

type User = {
    id: number;
    username: string;
};

const response = await fetch("/api/user/1");
const rawData = await response.json();

const user = rawData as User;
console.log(user.username)

const ageText = "25";

const age = (ageText as unknown) as number;

console.log(typeof age); // string

// Const Assertions
const colors = ["red", "green", "blue"] as const;
colors[0] = "yellow"

// Satisfies

type AUser = {
    id: number | string;
    name: string;
};

const oneUser = {
    id: 123345,
    name: "Tapas"
} satisfies AUser

oneUser.id.toFixed();


type FeatureConfig = {
    enabled: boolean;
    maxRetries: number;
    mode: "development" | "production";
};

type AppSettings = {
    analytics: boolean | FeatureConfig,
    authentication: boolean | FeatureConfig;
    notifications: boolean | FeatureConfig;
}

const currentSettings = {
    analytics: true,
    authentication: false,
    notifications: {
        enabled: true,
        maxRetries: 3,
        mode: "production"
    }
} satisfies AppSettings

currentSettings.notifications.maxRetries * 2