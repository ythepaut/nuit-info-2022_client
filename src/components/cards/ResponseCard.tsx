import { RCard } from "../../model/card";

interface Props {
    card: RCard;
}

export default function ResponseCard(props: Props): JSX.Element {
    return (
        <div className="card bg-gray-200 cursor-pointer flex flex-col justify-center items-center transition transform hover:-translate-y-2.5 hover:shadow-lg shadow-cyan-500/50">
            {props.card.description}
        </div>
    );
}
