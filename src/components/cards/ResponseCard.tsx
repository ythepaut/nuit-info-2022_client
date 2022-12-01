interface Props {
    color: string;
    response: string;
}

export default function ResponseCard(props:Props): JSX.Element {
    return (
        <div className={`card ${props.color} cursor-pointer flex flex-col justify-center items-center transition transform hover:-translate-y-2.5 hover:shadow-lg shadow-cyan-500/50`}>
            {props.response}
        </div>
    )
}