import { createContext } from "react";
import { Castle, Creature } from "./contracts";

export interface MainContext {
    castle: Castle | null;
    setCastle: React.Dispatch<React.SetStateAction<Castle | null>>;
    creature: Creature | null;
    setCreature: React.Dispatch<React.SetStateAction<Creature | null>>;
}

export const MainContext = createContext<MainContext>({
    castle: null,
    setCastle: () => {},
    creature: null,
    setCreature: () => {}
});
