import { RCard } from "../../model/card";

interface Props {
    card: RCard;
}

export default function ResponseCard(props: Props): JSX.Element {
    return (
        <div className="card border-4 border-gray-500 shadow-lg cursor-pointer flex flex-col justify-center items-center transition transform hover:-translate-y-2.5 hover:shadow-lg shadow-gray-500/50">
            <p className={"font-bold text-xl text-gray-600"}>{props.card.message}</p>
        </div>
    );
}
