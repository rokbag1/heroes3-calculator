export interface Town {
    id: number;
    keyWord: string;
    town: string;
}

export interface Creature {
    id: number;
    name: string;
    power: number;
    image: string;
}

export interface Quantity {
    id: number;
    name: string;
    quantityMin: number;
    quantityMax: number;
}

export interface Item {
    id: number;
    name: string;
    power: number;
    image: string;
}

export interface ItemSelector {
    folder: string;
}