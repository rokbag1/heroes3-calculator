import React, { useContext } from "react";

import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

const SelectCreature = ({ creature, setCreature, town }: MainContext): JSX.Element => {
    const creatureArray = town?.town != null ? getCreaturesArray(town.town as Towns) : null;

    return (
        <div className="pick-game-item">
            {creatureArray != null
                ? creatureArray.map((item, index) => (
                      <div
                          className={`game-item ${item.id === creature?.id ? "picked-item" : ""}`}
                          key={item.id}
                          onClick={() => setCreature(item)}
                      >
                          <div className="game-item-block">
                              <img className="image-in-scroll" src={`src/images/creatures/${town?.town}/${item.image}.bmp`} alt="image" />
                              <div className={`text-box-in-scroll ${index === 0 ? "first-element" : ""}`}>
                                  <div className="text-in-scroll">{item.name}</div>
                              </div>
                          </div>
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
            <div className="calculator-block-title">Select Creature</div>
            {castleContext.town != null ? <SelectCreature {...castleContext} /> : null}
        </div>
    );
};
