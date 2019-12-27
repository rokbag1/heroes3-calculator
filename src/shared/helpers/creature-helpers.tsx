import { Creature } from "src/components/main-design/contracts";

import { CASTLE_CREATURES } from "../creatures/castle";
import { Towns } from "../constants";

export function getCreaturesArray(town: Towns): Array<Creature> {
    switch (town) {
        // case Towns.Conflux: {
        //     return CONFLUX_CREATURES;
        // }
        // case Towns.Cove: {
        //     return COVE_CREATURES;
        // }
        // case Towns.Dungeon: {
        //     return DUNGEON_CREATURES;
        // }
        // case Towns.Fortress: {
        //     return FORTRESS_CREATURES;
        // }
        // case Towns.Inferno: {
        //     return INFERNO_CREATURES;
        // }
        // case Towns.Necropolis: {
        //     return NECROPOLIS_CREATURES;
        // }
        // case Towns.Rampart: {
        //     return RAMPART_CREATURES;
        // }
        // case Towns.Stronghold: {
        //     return STRONGHOLD_CREATURES;
        // }
        // case Towns.Tower: {
        //     return TOWER_CREATURES;
        // }
        default:
        case Towns.Castle: {
            return CASTLE_CREATURES;
        }
    }
}
