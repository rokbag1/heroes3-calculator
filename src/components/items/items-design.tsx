import React, { useContext, useState } from "react";

// import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { ART_BUI_SELECTOR } from "src/shared/selectors";
import { ItemSwitch } from "../main-design/contracts";
import { getSwitchArray, getLastItem } from "../../shared/helpers/item-switch-helpers";
import { Selectors, LastSelectorDwellings, LastSelectorItems, LastSelectorBuildings } from "src/shared/constants";

// import { getCreaturesArray } from "src/shared/helpers/creature-helpers";


//First selector if element is artifact building or dwelling
const SelectArtifactOrBuilding = (props: SelectArtifactOrBuildingProps): JSX.Element => (
    <div className="artifact-building-container">
        <div className="type">
            {ART_BUI_SELECTOR.map(item => (
                <div
                    className={`artifact_building-selector ${item.id === props.selector?.id ? "picked-item" : ""}`}
                    key={item.id}
                    onClick={() => props.setSelector(item)}
                >
                    <img src={`src/images/${item.image}`} />
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
);

//Second selector if 
const selectedItemTypeSwitch = ( {selector, setSelector}: SelectArtifactOrBuildingProps ): JSX.Element | null => {
    if (selector == null) {
        return null;
    }

    const selectorArray = selector?.id != null ? getSwitchArray(selector.name as Selectors) : null;

    return (
        <div className="artifact-building-container second-item-selector">
            <div className="type">
                {selectorArray != null
                    ? selectorArray.map(item => (
                          <div className={`artifact_building-selector ${item.id === selector.id ? "picked-item" : ""}`} key={item.id} onClick={() => setSelector(item)}
                          >
                              <img src={`src/images/${item.image}`} />
                              <div>{item.name}</div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

const realItemSelector = ( {selector, setSelector}: SelectArtifactOrBuildingProps ): JSX.Element | null => {
    if (selector == null) {
        return null;
    }

    const selectorArray = selector?.id != null ? getLastItem(selector.name as LastSelectorItems) : null;

    return (
        <div className="artifact-building-container second-item-selector">
            <div className="type">
                {selectorArray != null
                    ? selectorArray.map(item => (
                          <div className={`artifact_building-selector ${item.id === selector.id ? "picked-item" : ""}`} key={item.id} onClick={() => setSelector(item)}
                          >
                              <img src={`src/images/${item.image}`} />
                              <div>{item.name}</div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
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
            <div className="calculator-block-title add-item">Add Item</div>
            <div className="pick-item-flex">
                {castleContext.town != null ? <SelectArtifactOrBuilding selector={selector} setSelector={setSelector} /> : null}
                {selectedItemTypeSwitch({selector:selector, setSelector:setSelector})}
                {realItemSelector({selector:selector, setSelector:setSelector})}
            </div>
        </div>
    );
};
