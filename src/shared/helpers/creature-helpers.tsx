import { Creature } from "src/components/main-design/contracts";

import { Towns } from "../constants";

import { CASTLE_CREATURES } from "../creatures/castle";
import { CONFLUX_CREATURES } from "../creatures/conflux";
import { COVE_CREATURES } from "../creatures/cove";
import { DUNGEON_CREATURES } from "../creatures/dungeon";
import { FORTRESS_CREATURES } from "../creatures/fortress";
import { INFERNO_CREATURES } from "../creatures/inferno";
import { NECROPOLIS_CREATURES } from "../creatures/necropolis";
import { RAMPART_CREATURES } from "../creatures/rampart";
import { STRONGHOLD_CREATURES } from "../creatures/stronghold";
import { TOWER_CREATURES } from "../creatures/tower";

export function getCreaturesArray(town: Towns): Array<Creature> {
    switch (town) {
        case Towns.Conflux: {
            return CONFLUX_CREATURES;
        }
        case Towns.Cove: {
            return COVE_CREATURES;
        }
        case Towns.Dungeon: {
            return DUNGEON_CREATURES;
        }
        case Towns.Fortress: {
            return FORTRESS_CREATURES;
        }
        case Towns.Inferno: {
            return INFERNO_CREATURES;
        }
        case Towns.Necropolis: {
            return NECROPOLIS_CREATURES;
        }
        case Towns.Rampart: {
            return RAMPART_CREATURES;
        }
        case Towns.Stronghold: {
            return STRONGHOLD_CREATURES;
        }
        case Towns.Tower: {
            return TOWER_CREATURES;
        }
        default:
        case Towns.Castle: {
            return CASTLE_CREATURES;
        }
    }
}
