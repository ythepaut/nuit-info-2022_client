export interface Card {
    message: string;
}

export interface SCard extends Card {
    diseases: string[];
}

export interface RCard extends Card {}
