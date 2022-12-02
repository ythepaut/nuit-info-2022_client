import { SCard } from "../../model/card";

interface Props {
    card?: SCard;
}

export default function SituationCard(props: Props): JSX.Element {
    return (
        <div className="card shadow-lg bg-pink-900 border-4 border-white flex">
            <p className={"font-bold text-xl text-gray-200"}>{props.card ? props.card.message : ""}</p>
        </div>
    );
}
