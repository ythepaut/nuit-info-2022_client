interface Props{
    situation: string,
    color: string
}

export default function SituationCard(props: Props): JSX.Element {
    return (
        <div className={`card ${props.color} flex flex-col justify-center items-center` }>
            {props.situation}
        </div>
    )
}