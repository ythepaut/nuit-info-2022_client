import React from "react";
import { getRound } from "../services/backend";

export default function Test(): JSX.Element {
    return (
        <button
            onClick={async () => {
                alert(await getRound());
            }}
        >
            Test
        </button>
    );
}
