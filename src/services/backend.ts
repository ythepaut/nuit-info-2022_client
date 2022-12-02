import axios, { Method } from "axios";
import { RCard, SCard } from "../model/card";
import { NewRound, Round } from "../model/round";

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

export async function postRound(remainingCards: RCard[]): Promise<NewRound> {
    return request<NewRound, { remainingCards: RCard[] }>("/card/round", "POST", {
        remainingCards,
    });
}

export async function reroll(remainingCards: SCard[]): Promise<SCard[]> {
    return request<SCard[], void>("/card/reroll", "GET");
}
