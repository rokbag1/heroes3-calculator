import { Quantity } from "src/components/main-design/contracts";

export const QUANTITY: Quantity[] = [
    {
        id: 50,
        name: "Few",
        quantityMin: 1,
        quantityMax: 4
    },

    {
        id: 51,
        name: "Several",
        quantityMin: 5,
        quantityMax: 9
    },

    {
        id: 53,
        name: "Pack",
        quantityMin: 10,
        quantityMax: 19
    },

    {
        id: 54,
        name: "Lots",
        quantityMin: 20,
        quantityMax: 49
    },

    {
        id: 55,
        name: "Horde",
        quantityMin: 50,
        quantityMax: 99
    },

    {
        id: 56,
        name: "Throng",
        quantityMin: 100,
        quantityMax: 249
    },

    {
        id: 57,
        name: "Swarm",
        quantityMin: 256,
        quantityMax: 499
    },

    {
        id: 58,
        name: "Zounds",
        quantityMin: 500,
        quantityMax: 999
    },

    {
        id: 59,
        name: "Legion",
        quantityMin: 1000,
        quantityMax: 9999999
    },
];
