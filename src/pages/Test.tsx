import React from "react";
import { startRound } from "../services/backend";

export default function Test(): JSX.Element {
    return (
        <button
            onClick={async () => {
                alert(await startRound());
            }}
        >
            Test
        </button>
    );
}
