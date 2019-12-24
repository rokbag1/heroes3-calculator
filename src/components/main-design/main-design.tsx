import React, { useState } from "react";

import { AppHistory } from "@routing/app-history";
import { AppRoutesPaths } from "@routing/app-routes-paths";

import { Castle } from "./contracts";
import { MainContext } from "./main-context";
import { CreatureDesign } from "../creature/creature-design";

import "./main-design.scss";
import { Template } from "../template-component/template-component";

export const MainDesign: React.FC = () => {
    const [castle, setCastle] = useState<Castle | null>(null);

    return (
        //Main stuff in website
        //Context provides hook data for all children inside wrapped components
        <MainContext.Provider
            value={{
                castle: castle,
                setCastle: setCastle
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
                        <CreatureDesign />
                    </div>

                    <div className="body-block__quantity">
                        <Template />
                    </div>

                    <div className="body-block__item"> {/* Item can also be building */}</div>
                </div>
            </div>
        </MainContext.Provider>
    );
};
