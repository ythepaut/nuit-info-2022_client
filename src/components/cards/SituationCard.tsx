interface Props{
    situation: string,
    color: string
}

export default function SituationCard(props: Props): JSX.Element {
    return (
        <div className={`card ${props.color} flex` }>
            {props.situation}
        </div>
    )
}