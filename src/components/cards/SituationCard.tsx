import { SCard } from "../../model/card";

interface Props {
    card?: SCard;
}

export default function SituationCard(props: Props): JSX.Element {
    return <div className="card bg-gray-600 flex">{props.card ? props.card.message : ""}</div>;
}
