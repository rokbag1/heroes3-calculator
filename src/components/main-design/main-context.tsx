import { createContext } from "react";
import { Castle } from "./contracts";

export interface MainContext {
    castle: Castle | null;
    setCastle: React.Dispatch<React.SetStateAction<Castle | null>>;
}

export const MainContext = createContext<MainContext>({
    castle: null,
    setCastle: () => {}
});
