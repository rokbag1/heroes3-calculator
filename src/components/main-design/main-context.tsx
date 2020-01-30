import { createContext } from "react";
import { Town, Creature, Quantity, Item } from "./contracts";

export interface MainContext {
    town: Town | null;
    setTown: React.Dispatch<React.SetStateAction<Town | null>>;
    creature: Creature | null;
    setCreature: React.Dispatch<React.SetStateAction<Creature | null>>;
    quantity: Quantity | null;
    setQuantity: React.Dispatch<React.SetStateAction<Quantity | null>>;
    item: Item | null;
    setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

export const MainContext = createContext<MainContext>({
    town: null,
    setTown: () => {},
    creature: null,
    setCreature: () => {},
    quantity: null,
    setQuantity: () => {},
    item: null,
    setItem: () => {}
});
