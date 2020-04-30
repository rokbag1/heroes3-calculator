import { createContext } from "react";
import { Town, Creature, Quantity, ItemSwitch, Week } from "./contracts";

export interface MainContext {
    town: Town | null;
    setTown: React.Dispatch<React.SetStateAction<Town | null>>;
    creature: Creature | null;
    setCreature: React.Dispatch<React.SetStateAction<Creature | null>>;
    quantity: Quantity | null;
    setQuantity: React.Dispatch<React.SetStateAction<Quantity | null>>;
    items: ItemSwitch[];
    setItems: (itemToPush: ItemSwitch) => void;
    removeItem: (itemToRemove: ItemSwitch) => void;
    week: Week | null;
    setWeek: React.Dispatch<React.SetStateAction<Week | null>>;
}

export const MainContext = createContext<MainContext>({
    town: null,
    setTown: () => {},
    creature: null,
    setCreature: () => {},
    quantity: null,
    setQuantity: () => {},
    items: [],
    setItems: () => {},
    removeItem: () => {},
    week: null,
    setWeek: () => {}
});
