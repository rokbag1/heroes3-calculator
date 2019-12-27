import React, { useContext, ReactNodeArray } from "react";
import { MainContext } from "../main-design/main-context";

function CreatureLoop(): JSX.Element {
    const castleContext = useContext(MainContext);
    const creatures: ReactNodeArray = [];

    for (let index = 1; index < 14; index++) {
        creatures.push(
            <div
                className={`castle-image ${index === castleContext.creature?.id ? "selected-castle" : ""}`}
                key={`creature-${index}`}
                onClick={() => castleContext.setCreature({id:1})}
            >
                <img src={`src/images/creatures/${castleContext.castle?.town}/${castleContext.castle?.keyWord}${index}.bmp`} alt="image" />
            </div>
        );
    }

    return <div> {creatures.map(item => item)}</div>;
}

const SelectCreature = (): JSX.Element => <div className="castle-images">{CreatureLoop()}</div>;

export const CreatureDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    // React way foreach elements
    return (
        <div>
            <div className="select-castle">Then select creature</div>
            {castleContext.castle != null ? <SelectCreature /> : null}
        </div>
    );
};
