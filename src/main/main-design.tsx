import React from "react";

import { CreatureDesign } from "./creature/creature-design";

import "./main-design.scss";

export const MainDesign: React.FC = () => {
    return (
        //Main stuff in website
        <div className="body-class">
            <div className="body-title">
                <h4> Heroes of Might and Magic III calculator </h4>
            </div>

            {/* TODO select one of the blocks and create logic */}
            <div className="body-block">
                <div className="body-block__creature">
                    <CreatureDesign />
                </div>

                <div className="body-block__quantity"></div>

                <div className="body-block__item"> {/* Item can also be building */}</div>
            </div>
        </div>
    );
};
