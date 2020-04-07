import { ItemSwitch } from "../../components/main-design/contracts";
import { Selectors, LastSelectorBuildings, LastSelectorDwellings, LastSelectorItems } from "../constants";
import { SWITCH_ITEMS, SWITCH_BUILDINGS, SWITCH_DWELLING, SELECT_CAPE, SELECT_COMBO, SELECT_FEET, SELECT_HELM, SELECT_MISC, SELECT_NECKLACE, SELECT_RING, SELECT_SHIELD, SELECT_TORSO, SELECT_WEAPON, SELECT_RESOURCE, SELECT_BANKS, SELECT_MINES, SELECT_OBJECT, SELECT_DWE_CASTLE, SELECT_DWE_CONFLUX, SELECT_DWE_DUNGEON, SELECT_DWE_FORTRESS, SELECT_DWE_INFERNO, SELECT_DWE_NECROPOLIS, SELECT_DWE_RAMPART, SELECT_DWE_STRONGHOLD, SELECT_DWE_TOWER, SELECT_DWE_SWAMP } from "../data/pick-item";

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

export function getLastItem(item: LastSelectorItems): Array<ItemSwitch> {
    switch (item) {
        case LastSelectorItems.Cape: {
            return SELECT_CAPE;
        }
        case LastSelectorItems.Combo: {
            return SELECT_COMBO;
        }
        case LastSelectorItems.Feet: {
            return SELECT_FEET;
        }
        case LastSelectorItems.Helm: {
            return SELECT_HELM;
        }
        case LastSelectorItems.Misc: {
            return SELECT_MISC;
        }
        case LastSelectorItems.Necklace: {
            return SELECT_NECKLACE;
        }
        case LastSelectorItems.Ring: {
            return SELECT_RING;
        }
        case LastSelectorItems.Shield: {
            return SELECT_SHIELD;
        }
        case LastSelectorItems.Torso: {
            return SELECT_TORSO;
        }
        case LastSelectorItems.Weapon: {
            return SELECT_WEAPON;
        }
        case LastSelectorItems.Recourse: {
            return SELECT_RESOURCE;
        }
        default:
        case LastSelectorItems.Cape: {
            return SELECT_CAPE;
        }
    }
}

export function getLastBuilding(item: LastSelectorBuildings): Array<ItemSwitch> {
    switch (item) {
        case LastSelectorBuildings.Banks: {
            return SELECT_BANKS;
        }
        case LastSelectorBuildings.Mines: {
            return SELECT_MINES;
        }
        case LastSelectorBuildings.Objects: {
            return SELECT_OBJECT;
        }
        default:
        case LastSelectorBuildings.Banks: {
            return SELECT_BANKS;
        }
    }
}

export function getLastDwelling(item: LastSelectorDwellings): Array<ItemSwitch> {
    switch (item) {
        case LastSelectorDwellings.Castle: {
            return SELECT_DWE_CASTLE;
        }
        case LastSelectorDwellings.Conflux: {
            return SELECT_DWE_CONFLUX;
        }
        case LastSelectorDwellings.Cove: {
            return SELECT_DWE_SWAMP;
        }
        case LastSelectorDwellings.Dungeon: {
            return SELECT_DWE_DUNGEON;
        }
        case LastSelectorDwellings.Fortress: {
            return SELECT_DWE_FORTRESS;
        }
        case LastSelectorDwellings.Inferno: {
            return SELECT_DWE_INFERNO;
        }
        case LastSelectorDwellings.Necropolis: {
            return SELECT_DWE_NECROPOLIS;
        }
        case LastSelectorDwellings.Rampart: {
            return SELECT_DWE_RAMPART;
        }
        case LastSelectorDwellings.Stronghold: {
            return SELECT_DWE_STRONGHOLD;
        }
        case LastSelectorDwellings.Tower: {
            return SELECT_DWE_TOWER;
        }
        default:
        case LastSelectorDwellings.Castle: {
            return SELECT_DWE_CASTLE;
        }
    }
}