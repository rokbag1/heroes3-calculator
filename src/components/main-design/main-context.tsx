import { createContext } from "react";
import { Town, Creature } from "./contracts";

export interface MainContext {
    town: Town | null;
    setTown: React.Dispatch<React.SetStateAction<Town | null>>;
    creature: Creature | null;
    setCreature: React.Dispatch<React.SetStateAction<Creature | null>>;
}

export const MainContext = createContext<MainContext>({
    town: null,
    setTown: () => {},
    creature: null,
    setCreature: () => {}
});
