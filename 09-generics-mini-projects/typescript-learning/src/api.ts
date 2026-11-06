
interface NetworkUser {
    id: string;
    first_name: string;
    email_address: string;
}


interface CleanUser {
    id: string;
    name: string;
    email: string;
}

class ApiClient<T, R = T> {
    constructor(private baseUrl: string) { } // http://localhost:3000

    async fetch(endpoint: string, transformer?: (data: T) => R): Promise<R> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            const rawData: T = await response.json();
            if (transformer) {
                return transformer(rawData);
            }
            return rawData as unknown as R;
        } catch (error) {
            throw new Error(`API Request to ${endpoint} failed: ${error}`);
        }
    }
}

async function executeSync() {
    const simpleClient = new ApiClient<NetworkUser>('https://api.com');
    const data = await simpleClient.fetch('/profile/1')
    console.log(data)

    const userClient = new ApiClient<NetworkUser, CleanUser>("https://api.com");

    const cleanData = await userClient.fetch('/profile/1', (networkData) => {
        return {
            id: networkData.id,
            name: networkData.first_name,
            email: networkData.email_address
        };
    })
    // cleanData

}

