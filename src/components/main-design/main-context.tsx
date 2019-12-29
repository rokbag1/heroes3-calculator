import { createContext } from "react";
import { Town, Creature, Quantity } from "./contracts";

export interface MainContext {
    town: Town | null;
    setTown: React.Dispatch<React.SetStateAction<Town | null>>;
    creature: Creature | null;
    setCreature: React.Dispatch<React.SetStateAction<Creature | null>>;
    quantity: Quantity | null;
    setQuantity: React.Dispatch<React.SetStateAction<Quantity | null>>;
}

export const MainContext = createContext<MainContext>({
    town: null,
    setTown: () => {},
    creature: null,
    setCreature: () => {},
    quantity: null,
    setQuantity: () => {}
});
