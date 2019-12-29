import React, { useContext } from "react";

import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

const SelectCreature = ({ creature, setCreature, town }: MainContext): JSX.Element => {
    const creatureArray = town?.town != null ? getCreaturesArray(town.town as Towns) : null;

    return (
        <div className="column-elements">
            {creatureArray != null
                ? creatureArray.map((item) => (
                      <div
                          className={`column-element ${item.id === creature?.id ? "picked-element" : ""}`}
                          key={item.id}
                          onClick={() => setCreature(item)}
                      >
                          <img src={`src/images/creatures/${town?.town}/${item.image}.bmp`} alt="image" />
                      </div>
                  ))
                : null}
        </div>
    );
};

export const CreatureDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    // React way foreach elements
    return (
        <div>
            <div className="select-element-name creature-element">Then select creature</div>
            {castleContext.town != null ? <SelectCreature {...castleContext} /> : null}
        </div>
    );
};
