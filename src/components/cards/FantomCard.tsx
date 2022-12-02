interface Props {
    description: string;
}

export default function FantomCard(props: Props): JSX.Element {
    return (
        <div className={"fantom-card flex justify-center items-center"}>
            <p className={"text-gray-500 font-bold"}>{props.description}</p>
        </div>
    );
}
