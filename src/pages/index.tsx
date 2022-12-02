import SituationCard from "../components/cards/SituationCard";
import FantomCard from "../components/cards/FantomCard";
import { useEffect, useState } from "react";
import { RCard, SCard } from "../model/card";
import ResponseCard from "../components/cards/ResponseCard";

export default function Index(): JSX.Element {
    const [situationCard, setSituationCard] = useState<SCard>();

    const [selectedCard, setSelectedCard] = useState<RCard | null>(null);
    const [hand, setHand] = useState<RCard[]>([]);

    useEffect(() => {
        setHand([
            {
                description: "Oui 1",
            },
            {
                description: "Oui 2",
            },
            {
                description: "Non 1",
            },
            {
                description: "Non 2",
            },
        ]);
        setSituationCard({
            description: "Ceci est une situation...",
            diseases: ["Maladie A", "Maladie B"],
        });
    }, []);

    const moveCard = (index: number) => {
        if (selectedCard) return;
        setSelectedCard(hand[index]);
    };

    return (
        <div className="flex flex-col h-screen space-y-8">
            <div className="flex flex-row space-x-12 justify-center items-center mt-4">
                <SituationCard card={situationCard} />
                <div id="fantomcard">
                    {selectedCard ? <ResponseCard card={selectedCard} /> : <FantomCard description="Joue ta carte ici !" />}
                </div>
            </div>

            <div className="absolute bottom-3 w-full">
                <div className="flex flex-row space-x-5 bottom-5 justify-center">
                    {hand
                        .filter((card) => selectedCard === null || card.description !== selectedCard.description)
                        .map((card, index) => {
                            return (
                                <div key={index} onClick={() => moveCard(index)}>
                                    <ResponseCard card={card} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
