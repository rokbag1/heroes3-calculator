import React, { useContext, useState } from "react";

// import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { Selectors } from "src/shared/constants";

// import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

const SelectArtifactOrBuilding = (props: SelectArtifactOrBuildingProps): JSX.Element => (
    <div className="artifact-building-container">
        <div className="type">
            {
                
            }
            <div className="artifact_building-selector" onClick={()=>props.setSelector(Selectors.Artifact) }>
                <img src="src/images/artifacts/misc/MIS2.bmp" />
                <div>Artifact</div>
            </div>
            <div className="artifact_building-selector" onClick={()=>props.setSelector(Selectors.Building) }>
                <img src="src/images/buildings/banks/BAN11.gif" />
                <div>Building</div>
            </div>
            <div className="artifact_building-selector" onClick={()=>props.setSelector(Selectors.Building) }>
                <img src="src/images/buildings/banks/BAN11.gif" />
                <div>Dwelings</div>
            </div>
            <div className="artifact_building-selector" onClick={()=>props.setSelector(Selectors.Building) }>
                <img src="src/images/buildings/banks/BAN11.gif" />
                <div>Other Objects</div>
            </div>
            <div className="artifact_building-selector" onClick={()=>props.setSelector(Selectors.Building) }>
                <img src="src/images/buildings/banks/BAN11.gif" />
                <div>Other Objects</div>
            </div>
        </div>
    </div>
);

const selectedItemTypeSwitch = (selector: Selectors | null): JSX.Element | null => {
    if (selector == null) {
        return null;
    }
    
    return (
        <div></div>
    );
};

//Example of props
interface SelectArtifactOrBuildingProps {
    setSelector: React.Dispatch<React.SetStateAction<Selectors | null>>;
    selector: Selectors | null;
}

export const ItemDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    const [selector, setSelector] = useState<Selectors | null>(null);

    // React way foreach elements
    return (
        <div>
            <div className="calculator-block-title">Add Item</div>
            <div className="pick-item-flex">
                {castleContext.town != null ? <SelectArtifactOrBuilding selector={selector} setSelector={setSelector} /> : null}
                {selectedItemTypeSwitch(selector)}
            </div>
        </div>
    );
};
