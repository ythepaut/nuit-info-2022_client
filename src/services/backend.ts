import axios, { Method } from "axios";
import { Round } from "../model/round";

function backendUrl(): string {
    if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        return process.env.NEXT_PUBLIC_BACKEND_URL;
    } else {
        throw new Error("No backend url in environment");
    }
}

async function request<T, D>(endpoint: string, method: Method, data?: D, headers?: Record<string, string>): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
        await axios
            .request<T>({
                method,
                url: backendUrl() + endpoint,
                data,
                headers,
            })
            .then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    console.warn("No data in response");
                    reject("No data");
                }
            })
            .catch((err) => {
                console.warn(err);
                reject(err);
            });
    });
}

export async function getRound(): Promise<Round> {
    return await request<Round, void>("/round", "GET");
}

export async function postRound(round: Round): Promise<Round> {
    return await request<Round, Round>("/round", "POST", round);
}
