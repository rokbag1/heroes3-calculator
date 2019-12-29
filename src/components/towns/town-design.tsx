import React, { useContext } from "react";

import { Town } from "../main-design/contracts";
import { MainContext } from "../main-design/main-context";
import { TOWN } from "src/shared/towns";

const SelectCastle = (props: SelectCastleProps): JSX.Element => (
    <div className="column-elements">
        {TOWN.map(item => (
            <div
                className={`column-element ${item.id === props.castle?.id ? "picked-element" : ""}`}
                key={item.id}
                onClick={() => props.setCastle(item)}
            >
                <div className="overflow-element">
                    <img className="overflow-element-image" src={`src/images/towns/${item.town}.gif`} alt="image" />
                     <div className="overflow-element-text">
                        <div className="overflow-element-text-push">{item.town}</div>
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
            <div className="select-element-name">Select Town</div>
            <SelectCastle setCastle={castleContext.setTown} castle={castleContext.town} />
        </div>
    );
};
