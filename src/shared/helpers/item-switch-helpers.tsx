import { ItemSwitch } from "../../components/main-design/contracts";
import { Selectors } from "../constants";
import { SWITCH_ITEMS, SWITCH_BUILDINGS, SWITCH_DWELLING } from "../selectors";

export function getSwitchArray(item: Selectors): Array<ItemSwitch> {
    switch (item) {
        case Selectors.Items: {
            return SWITCH_ITEMS;
        }
        case Selectors.Buildings: {
            return SWITCH_BUILDINGS;
        }
        case Selectors.Dwellings: {
            return SWITCH_DWELLING;
        }
        default:
        case Selectors.Items: {
            return SWITCH_ITEMS;
        }
    }
}
