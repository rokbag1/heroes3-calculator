import React, { useContext } from "react";

// import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
// import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

const AddItem = ({ creature, setCreature, town, setQuantity }: MainContext): JSX.Element => {
    // const creatureArray = town?.town != null ? getCreaturesArray(town.town as Towns) : null;
    return (
        <div className="add-item-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export const ItemDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    // React way foreach elements 
    return (
        <div>
            <div className="calculator-block-title">Add Item</div>
            {castleContext.town != null ? <AddItem {...castleContext} /> : null}
        </div>
    );
};
