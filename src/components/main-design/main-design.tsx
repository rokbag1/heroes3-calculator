import React, { useState } from "react";

import { AppHistory } from "@routing/app-history";
import { AppRoutesPaths } from "@routing/app-routes-paths";

import { Town, Creature } from "./contracts";
import { MainContext } from "./main-context";
import { TownDesign } from "../towns/town-design";
import { CreatureDesign } from "../creatures/creature-design";

import "./main-design.scss";

export const MainDesign: React.FC = () => {
    const [town, setTown] = useState<Town | null>(null);
    const [creature, setCreature] = useState<Creature | null>(null);

    return (
        //Main stuff in website
        //Context provides hook data for all children inside wrapped components
        <MainContext.Provider
            value={{
                town: town,
                setTown: setTown,
                creature: creature,
                setCreature: setCreature
            }}
        >
            <div className="body-class">
                <div className="body-title">
                    <h4> Heroes of Might and Magic III calculator </h4>
                    <button type="button" onClick={() => AppHistory.push(AppRoutesPaths.mainApp.templateRoute)}>
                        PUSH NEXT ROUTE
                    </button>
                </div>

                {/* TODO select one of the blocks and create logic */}
                <div className="body-block">
                    <div className="body-block__creature">
                        <TownDesign />
                    </div>

                    <div className="body-block__quantity">
                        <CreatureDesign />
                    </div>

                    <div className="body-block__item"> {/* Item can also be building */}</div>
                </div>
            </div>
        </MainContext.Provider>
    );
};
