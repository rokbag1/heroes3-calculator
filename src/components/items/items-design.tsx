import React, { useContext, useState } from "react";

// import { Towns } from "src/shared/constants";
import { MainContext } from "../main-design/main-context";
import { ART_BUI_SELECTOR } from "src/shared/data/pick-item";
import { ItemSwitch, SecondItemSwitch, LastItemSwitch } from "../main-design/contracts";
import { getSwitchArray, getLastItem, getLastBuilding, getLastDwelling } from "../../shared/helpers/item-switch-helpers";
import { Selectors, LastSelectorDwellings, LastSelectorItems, LastSelectorBuildings } from "src/shared/constants";

// import { getCreaturesArray } from "src/shared/helpers/creature-helpers";

//First selector if element is artifact building or dwelling
const SelectArtifactOrBuilding = (props: SelectArtifactOrBuildingProps): JSX.Element => {
    return (
        <div className="artifact-building-container">
            <div className="type">
                {ART_BUI_SELECTOR.map(item => (
                    <div
                        className={`artifact_building-selector ${item.id === props.selector?.id ? "picked-item" : ""}`}
                        key={item.id}
                        onClick={() => (props.setSelector != null ? props.setSelector(item) : null)}
                    >
                        <img src={`src/images/${item.image}`} />
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

//Second selector if
const SecondSelector = (props: SecondSelectorProp): JSX.Element => {
    const selectorArray = props.selector?.id != null ? getSwitchArray(props.selector.name as Selectors) : null;

    return (
        <div className="artifact-building-container second-item-selector">
            <div className="type">
                {selectorArray != null
                    ? selectorArray.map(item => (
                          <div
                              className={`artifact_building-selector ${item.id === props.secSelector?.id ? "picked-item" : ""}`}
                              key={item.id}
                              onClick={() => props.secSetSelector(item)}
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

//Third selector if
const LastSelector = (props: LastSelectorProp): JSX.Element => {
    const context = useContext(MainContext);

    let selectorArray = null;
    switch (props.selector?.name) {
        case "Items": {
            selectorArray = props.secSelector?.id != null ? getLastItem(props.secSelector?.name as LastSelectorItems) : null;
            break;
        }
        case "Buildings": {
            selectorArray = props.secSelector?.id != null ? getLastBuilding(props.secSelector?.name as LastSelectorBuildings) : null;
            break;
        }
        case "Dwellings": {
            selectorArray = props.secSelector?.id != null ? getLastDwelling(props.secSelector?.name as LastSelectorDwellings) : null;
            break;
        }
        default: {
            selectorArray = props.secSelector?.id != null ? getLastItem(props.secSelector?.name as LastSelectorItems) : null;
            break;
        }
    }

    return (
        <div className="artifact-building-container second-item-selector">
            <div className="type">
                {selectorArray != null
                    ? selectorArray.map(item => (
                          <div
                              className={`artifact_building-selector ${item.id === props.lastSelector?.id ? "picked-item" : ""}`}
                              key={item.id}
                              onClick={() => {
                                  props.lastSetSelector(item);
                                  context.setItems(item);
                              }}
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

const FormattedItem = (): JSX.Element => {
    const context = useContext(MainContext);

    return (
        <div className="">
            {context.items.map(item => {
                return (
                    <img
                        key={item.id}
                        src={`src/images/${item.image}`}
                        alt=""
                        onClick={() => {
                            context.removeItem(item);
                        }}
                    />
                );
            })}
        </div>
    );
};

//First prop: first selector
interface SelectArtifactOrBuildingProps {
    setSelector?: React.Dispatch<React.SetStateAction<ItemSwitch | null>>;
    selector?: ItemSwitch | null;
}

//Second prop: second selector
interface SecondSelectorProp extends SelectArtifactOrBuildingProps {
    secSetSelector: React.Dispatch<React.SetStateAction<SecondItemSwitch | null>>;
    secSelector: SecondItemSwitch | null;
}

//Third prop: second selector
interface LastSelectorProp extends SecondSelectorProp {
    lastSetSelector: React.Dispatch<React.SetStateAction<LastItemSwitch | null>>;
    lastSelector: LastItemSwitch | null;
}

export const ItemDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    const [selector, setSelector] = useState<ItemSwitch | null>(null);
    const [secSelector, secSetSelector] = useState<SecondItemSwitch | null>(null);
    const [lastSelector, lastSetSelector] = useState<LastItemSwitch | null>(null);

    // React way foreach elements
    return (
        <div>
            <div className="calculator-block-title add-item">Add Item</div>
            <div className="pick-item-flex">
                {castleContext.town != null && castleContext.creature != null && castleContext.quantity != null ? (
                    <SelectArtifactOrBuilding selector={selector} setSelector={setSelector} />
                ) : null}
                {castleContext.town != null && selector?.name != null ? (
                    <SecondSelector secSelector={secSelector} secSetSelector={secSetSelector} selector={selector} />
                ) : null}
                {secSelector?.name != null ? (
                    <LastSelector
                        selector={selector}
                        lastSelector={lastSelector}
                        lastSetSelector={lastSetSelector}
                        secSelector={secSelector}
                        secSetSelector={secSetSelector}
                    />
                ) : null}

                <FormattedItem />
            </div>
        </div>
    );
};
