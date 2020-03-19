import React, { useState } from "react";

// import { AppHistory } from "@routing/app-history";
// import { AppRoutesPaths } from "@routing/app-routes-paths";

import { Town, Creature, Quantity, Item, ItemSwitch } from "./contracts";
import { MainContext } from "./main-context";
import { TownDesign } from "../towns/town-design";
import { CreatureDesign } from "../creatures/creature-design";
import { QuantityDesign } from "../quantity/quantity-design";
import { ItemDesign } from "../items/items-design";

import "./main-design.scss";

export const MainDesign: React.FC = () => {
    const [town, setTown] = useState<Town | null>(null);
    const [creature, setCreature] = useState<Creature | null>(null);
    const [quantity, setQuantity] = useState<Quantity | null>(null);
    const [items, setItems] = useState<ItemSwitch[]>([]);

    const pushToItems = (lastSelectedItem: ItemSwitch): void => {
        setItems(items.concat(lastSelectedItem));
    };

    const removeItem = (itemToRemove: ItemSwitch): void => {
        setItems(items.filter(item => item.id !== itemToRemove.id));
    };

    return (
        //Main stuff in website
        //Context provides hook data for all children inside wrapped components
        <MainContext.Provider
            value={{
                town: town,
                setTown: setTown,
                creature: creature,
                setCreature: setCreature,
                quantity: quantity,
                setQuantity: setQuantity,
                items: items,
                setItems: pushToItems,
                removeItem: removeItem
            }}
        >
            <div className="body-class">
                <div className="body-title">
                    <img src="src/images/site-title.png"></img>
                    {/* <button type="button" onClick={() => AppHistory.push(AppRoutesPaths.mainApp.templateRoute)}>
                        PUSH NEXT ROUTE
                    </button> */}
                </div>

                {/* TODO select one of the blocks and create logic */}
                <div className="body-block">
                    <div className={`town ${town == null ? "current-step" : ""}`}>
                        <TownDesign />
                    </div>

                    <div className="creature">
                        <CreatureDesign />
                    </div>
                    <div className="quantity">
                        {" "}
                        {/* Item can also be building */}
                        <QuantityDesign />
                    </div>
                    <div className="item">
                        <ItemDesign />
                    </div>
                    <div className="week"> {/*  */}</div>
                </div>
            </div>
        </MainContext.Provider>
    );
};
