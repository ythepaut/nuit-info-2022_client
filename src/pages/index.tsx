import SituationCard from "../components/cards/SituationCard";
import FantomCard from "../components/cards/FantomCard";
import Sidebar from "../components/Sidebar";
import {useState} from "react";
import {Card} from "../model/card";

export default function Index(): JSX.Element {

    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const responsesCard: Card[] = [
        {
            color: "bg-gray-200",
            message: "Oui 1",
            diseases: [""]
        },{
            color: "bg-gray-200",
            message: "Oui 2",
            diseases: [""]
        },{
            color: "bg-gray-200",
            message: "Non 1",
            diseases: [""]
        },{
            color: "bg-gray-200",
            message: "Non 2",
            diseases: [""]
        }
    ]

    function moveCard(index: number){
        setSelectedCard(responsesCard[index]);
        const fantomCard = document.getElementById("fantomcard");
        const clickedCard = document.getElementById(`card_${index}`);
        const xFantom = fantomCard?.offsetLeft;
        const yFantom = fantomCard?.offsetTop;
        const xClicked = clickedCard?.offsetLeft;
        const yClicked = clickedCard?.offsetTop;
        const deltaX = xClicked!-xFantom!;
        const deltaY = yClicked!-yFantom!;
        clickedCard!.animate([
            {transform: `translate(${-deltaX}px, ${-deltaY}px)`}
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }

    return (
        <div className={"flex flex-col h-screen space-y-8"}>
            <div className={"flex flex-row space-x-12 justify-center items-center mt-4"}>
                <SituationCard situation={"Salut comment tu vas aujourd'hui, tu as passé une bonne journée ?"} color={"bg-gray-500"}/>
                <div id="fantomcard">
                    { selectedCard
                        ?  <ResponseCard color={selectedCard.color} response={selectedCard.message}/>
                        :  <FantomCard description={"Joue ta carte ici !"}/>
                    }
                </div>
            </div>
            <div className="absolute bottom-3 w-full">
                <div className={"flex flex-row space-x-5 bottom-5 justify-center"}>
                    {responsesCard.filter(card => selectedCard === null || card.message !== selectedCard.message).map((card, index) => {
                        return (
                            <div id={`card_${index.toString()}`} onClick={() => moveCard(index)}>
                                <ResponseCard
                                    color={responsesCard[index].color}
                                    response={responsesCard[index].message}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
