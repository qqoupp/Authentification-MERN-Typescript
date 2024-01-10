import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (response.status === 403) {
            throw new Error('Forbidden: Access to the resource is denied');
        } else if (contentType && contentType.includes('application/json')) {
            const errorBody = await response.json();
            const errorMessage = errorBody.error || 'An error occurred';
            throw new Error(errorMessage);
        } else {
            throw new Error(response.statusText);
        }
    }
    return response;
}


export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("http://localhost:5500/api/users", { method: "GET" });
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("http://localhost:5500/api/users/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        try {
            return await response.json();
        } catch (e) {
            console.error("Error parsing JSON:", e);
            throw e;
        }
}

export interface LoginCredentials {
    username: string,
    password: string,
}

export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("http://localhost:5500/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export async function logout() {
    await fetchData("http://localhost:5500/api/users/logout", { method: "POST" });
}




