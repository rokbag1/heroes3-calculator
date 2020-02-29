import { Quantity } from "src/components/main-design/contracts";

export const QUANTITY: Quantity[] = [
    {
        id: 50,
        name: "few",
        quantityMin: 1,
        quantityMax: 4
    },

    {
        id: 51,
        name: "several",
        quantityMin: 5,
        quantityMax: 9
    },

    {
        id: 53,
        name: "pack",
        quantityMin: 10,
        quantityMax: 19
    },

    {
        id: 54,
        name: "lots",
        quantityMin: 20,
        quantityMax: 49
    },

    {
        id: 55,
        name: "horde",
        quantityMin: 50,
        quantityMax: 99
    },

    {
        id: 56,
        name: "throng",
        quantityMin: 100,
        quantityMax: 249
    },
    {
        id: 57,
        name: "swarm",
        quantityMin: 250,
        quantityMax: 499
    },

    {
        id: 58,
        name: "zounds",
        quantityMin: 500,
        quantityMax: 999
    },

    {
        id: 59,
        name: "legion",
        quantityMin: 1000,
        quantityMax: 9999999
    },
];
