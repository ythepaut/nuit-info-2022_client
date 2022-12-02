import SituationCard from "../components/cards/SituationCard";
import FantomCard from "../components/cards/FantomCard";
import { useEffect, useState } from "react";
import { RCard, SCard } from "../model/card";
import ResponseCard from "../components/cards/ResponseCard";
import Sidebar from "../components/Sidebar";
import { Disease, Diseases } from "../model/disease";
import Modal from "../components/Modal";
import RerollButton from "../components/RerollButton";
import { postRound, reroll, startRound } from "../services/backend";

export default function Index(): JSX.Element {
    const [situationCard, setSituationCard] = useState<SCard>();

    const [selectedCard, setSelectedCard] = useState<RCard | null>(null);
    const [hand, setHand] = useState<RCard[]>([]);

    const [diseases, setDiseases] = useState<Disease[]>([]);

    useEffect(() => {
        startRound().then((round) => {
            setHand(round.responseCards);
            setSituationCard(round.situationCard);
        });
        setDiseases([Diseases.HIV]);
    }, []);

    const moveCard = (index: number) => {
        if (selectedCard) return;
        setSelectedCard(hand[index]);
    };

    useEffect(() => {
        if (!selectedCard) return;
        setTimeout(showModal, 500);
    }, [selectedCard]);

    const [modal, setModal] = useState<boolean>(false);

    const showModal = () => {
        setModal(true);
    };

    return (
        <div className={""}>
            <Sidebar diseases={diseases} />
            <div className="flex flex-col h-screen space-y-8">
                <div className="flex flex-row space-x-12 justify-center items-center mt-4">
                    <SituationCard card={situationCard} />
                    <div id="fantomcard">
                        {selectedCard ? <ResponseCard card={selectedCard} /> : <FantomCard description="Joue ta carte ici !" />}
                    </div>
                </div>

                <div className="absolute bottom-3 w-full">
                    <div className="flex flex-row space-x-5 bottom-5 justify-center">
                        {hand &&
                            hand
                                .filter((card) => selectedCard === null || card.message !== selectedCard.message)
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

            {modal && (
                <Modal
                    name="Titre"
                    message="Description"
                    closeCallback={() => {
                        postRound(hand.filter((card) => card.message != selectedCard!.message)).then((round) => {
                            setSelectedCard(null);
                            setSituationCard(round.situationCard);
                            const newHand = hand.filter((card) => card.message != selectedCard!.message);
                            newHand.push(round.responseCard);
                            setHand(newHand);
                            setModal(false);
                        });
                    }}
                />
            )}

            <RerollButton
                onClick={() => {
                    reroll().then((cards) => {
                        setHand(cards);
                    });
                }}
            />
        </div>
    );
}
