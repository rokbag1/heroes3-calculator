import React, { useContext, useState } from "react";

// import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { ART_BUI_SELECTOR } from "src/shared/constants";
import { ItemSwitch } from "../main-design/contracts";

// import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

const SelectArtifactOrBuilding = (props: SelectArtifactOrBuildingProps): JSX.Element => (
    <div className="artifact-building-container">
        <div className="type">
            {ART_BUI_SELECTOR.map(item => (
                <div className={`artifact_building-selector`} key={item.id} onClick={() => props.setSelector(item)}>
                    <img src={`src/images/${item.image}`} />
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
);

const selectedItemTypeSwitch = (selector: ItemSwitch | null): JSX.Element | null => {
    if (selector == null) {
        return null;
    }

    return <div></div>;
};

//Example of props
interface SelectArtifactOrBuildingProps {
    setSelector: React.Dispatch<React.SetStateAction<ItemSwitch | null>>;
    selector: ItemSwitch | null;
}

export const ItemDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    const [selector, setSelector] = useState<ItemSwitch | null>(null);

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
