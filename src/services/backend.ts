import axios from "axios";
import { Round } from "../model/round";

function backendUrl(): string {
    if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        return process.env.NEXT_PUBLIC_BACKEND_URL;
    } else {
        throw new Error("No backend url in environment");
    }
}

export async function getRound(): Promise<Round> {
    return new Promise<Round>(async (resolve, reject) => {
        await axios
            .request<Round>({
                method: "GET",
                url: backendUrl() + "/",
                data: {},
                headers: {},
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
