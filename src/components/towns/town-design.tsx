import React, { useContext } from "react";

import { Town } from "../main-design/contracts";
import { MainContext } from "../main-design/main-context";
import { TOWN } from "src/shared/towns";

const SelectCastle = (props: SelectCastleProps): JSX.Element => (
    <div className="pick-game-item">
        {TOWN.map((item, index) => (
            <div
                className={`game-item ${item.id === props.castle?.id ? "picked-item" : ""}`}
                key={item.id}
                onClick={() => props.setCastle(item)}
            >
                <div className="game-item-block">
                    <img className="image-in-scroll" src={`src/images/towns/${item.town}.gif`} alt="image" />
                    <div className={`text-box-in-scroll ${index === 0 ? "first-element" : ""}`}>
                        <div className="text-in-scroll">{item.town}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

//Example of props
interface SelectCastleProps {
    setCastle: React.Dispatch<React.SetStateAction<Town | null>>;
    castle: Town | null;
}

export const TownDesign: React.FC = () => {
    //useContext hook to receive all data from MainContext
    const castleContext = useContext(MainContext);
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle

    // React way foreach elements
    return (
        <div>
            <div className="calculator-block-title">Select Town</div>
            <SelectCastle setCastle={castleContext.setTown} castle={castleContext.town} />
        </div>
    );
};
