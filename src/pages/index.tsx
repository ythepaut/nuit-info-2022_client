import SituationCard from "../components/cards/SituationCard";
import ResponseCard from "../components/cards/ResponseCard";
import FantomCard from "../components/cards/FantomCard";

export default function Index(): JSX.Element {
    return (
        <div className={"flex flex-col h-screen space-y-8"}>
            <div className={"flex flex-row space-x-12 justify-center items-center mt-4"}>
                <SituationCard situation={"Salut comment tu vas aujourd'hui, tu as passé une bonne journée ?"} color={"bg-gray-500"}/>
                <FantomCard description={"Joue ta carte ici !"}/>
            </div>
            <div className="absolute bottom-3 w-full">
                <div className={"flex flex-row space-x-5 bottom-5 justify-center"}>
                    <ResponseCard color={"bg-gray-200"} response={"oui bien sur"}/>
                    <ResponseCard color={"bg-gray-200"} response={"non bien sur"}/>
                    <ResponseCard color={"bg-gray-200"} response={"peut etre bien sur"}/>
                    <ResponseCard color={"bg-gray-200"} response={"jsp bien sur"}/>
                </div>
            </div>
        </div>
    )
}