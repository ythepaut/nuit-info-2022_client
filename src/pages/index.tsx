import SituationCard from "../components/cards/SituationCard";
import ResponseCard from "../components/cards/ResponseCard";

export default function Index(): JSX.Element {
    return (
        <div className={"flex justify-center items-center"}>
            <SituationCard situation={"Veux tu choper le SIDA ?"} color={"bg-gray-500"}/>
            <ResponseCard color={"bg-gray-200"} response={"oui bien sur"}/>
        </div>
    )
}