import React, { useContext } from "react";

import { Town } from "../main-design/contracts";
import { MainContext } from "../main-design/main-context";
import { TOWN } from "src/shared/towns";

const SelectCastle = (props: SelectCastleProps): JSX.Element => (
    <div className="castle-images">
        {TOWN.map(item => (
            <div
                className={`castle-image ${item.id === props.castle?.id ? "selected-castle" : ""}`}
                key={item.id}
                onClick={() => props.setCastle(item)}
            >
                <img src={`src/images/towns/${item.town}.gif`} alt="image" />
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
            <div className="select-castle">First select town</div>
            <SelectCastle setCastle={castleContext.setTown} castle={castleContext.town} />
        </div>
    );
};
