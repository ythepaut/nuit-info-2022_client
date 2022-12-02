import axios, { Method } from "axios";
import { Card } from "../model/card";
import { Round } from "../model/round";

function backendUrl(): string {
    if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        return process.env.NEXT_PUBLIC_BACKEND_URL + "/api";
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

export async function startRound(): Promise<Round> {
    return request<Round, void>("/card/startround", "GET");
}

export async function postRound(remainingCards: Card[]): Promise<Round> {
    return request<Round, { remainingCards: Card[] }>("/card/round", "POST", {
        remainingCards,
    });
}

export async function reroll(remainingCards: Card[]): Promise<Card[]> {
    return request<Card[], void>("/card/reroll", "GET");
}
