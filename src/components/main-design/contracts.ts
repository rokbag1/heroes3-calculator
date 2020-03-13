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

export interface ItemSwitch {
    id: number;
    name: string;
    image: string;
}

export interface SecondItemSwitch {
    id: number;
    name: string;
    image: string;
}

export interface LastItemSwitch {
    id: number;
    name: string;
    image: string;
}