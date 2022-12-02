import { RCard, SCard } from "./card";

export interface Round {
    situationCard: SCard;
    responseCards: RCard[];
}

export interface NewRound {
    situationCard: SCard;
    responseCard: RCard;
}
