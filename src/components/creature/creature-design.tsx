import React, { useState } from "react";

export interface Castle {
    id: number;
    name: string;
    keyWord: string;
    town: string;
}

const castles: Castle[] = [
    {
        id: 1,
        name: "Castle",
        keyWord: "CA",
        town: "castle"
    },

    {
        id: 2,
        name: "Conflux",
        keyWord: "CA",
        town: "conflux"
    },

    {
        id: 3,
        name: "Cove",
        keyWord: "CA",
        town: "cove"
    },

    {
        id: 4,
        name: "Fortress",
        keyWord: "CA",
        town: "fortress"
    },

    {
        id: 5,
        name: "Inferno",
        keyWord: "CA",
        town: "inferno"
    },

    {
        id: 6,
        name: "Necropolis",
        keyWord: "CA",
        town: "necropolis"
    },
    // CAnt find neutral
    // {
    //     id: 7,
    //     name: "Neutral",
    //     keyWord: "CA",
    //     town: "neutral"
    // },

    {
        id: 8,
        name: "Rampart",
        keyWord: "CA",
        town: "rampart"
    },

    {
        id: 9,
        name: "Stronghold",
        keyWord: "CA",
        town: "stronghold"
    },

    {
        id: 10,
        name: "Tower",
        keyWord: "CA",
        town: "tower"
    },

    {
        id: 11,
        name: "Dungeon",
        keyWord: "CA",
        town: "dungeon"
    }
];

const SelectCastle = (props: SelectCastleProps): JSX.Element => (
    <div className="castle-images">
        {castles.map(item => (
            <div className={`castle-image ${item.id === props.castle?.id? "selected-castle" :""}`} key={item.id} onClick={() => props.setCastle(item)}>
                <img src={`src/images/towns/${item.town}.gif`} alt="image" />
            </div>
        ))}
    </div>
);

interface SelectCastleProps {
    setCastle: React.Dispatch<React.SetStateAction<Castle | null>>;
    castle: Castle | null;
}

export const CreatureDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const [castle, setCastle] = useState<Castle | null>(null);

    // React way foreach elements
    return (
        <div>
            <div className="select-castle">First select town</div>
            <SelectCastle setCastle={setCastle}  castle={castle}/>
            {castle != null ? <div>{castle.name}</div> : null}
        </div>
    );
};
