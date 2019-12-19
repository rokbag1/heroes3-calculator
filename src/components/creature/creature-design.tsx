import React from "react";

export interface Castle  {
    id: number;
    name: string;
    keyWord: string;
    folder: string;
};

const castles: Castle[] = [
    {
        id: 1,
        name: "Castle",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 2,
        name: "Conflux",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 3,
        name: "Cove",
        keyWord: "CA",
        folder: "castle"
    }, 

    {
        id: 4,
        name: "Fortress",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 5,
        name: "Inferno",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 6,
        name: "Necropolis",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 7,
        name: "Neutral",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 8,
        name: "Rampart",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 9,
        name: "Stronghold",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 10,
        name: "Tower",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 11,
        name: "Dungeon",
        keyWord: "CA",
        folder: "castle"
    },
    
];

//THATS how react is working with object arrays
const RenderList = (): JSX.Element => (
    <select>
        {castles.map(item => (
            <option style={{backgroundImage: "url(@images/towns/castle.gif)"}} key={item.id} value={item.name}>
            </option>
        ))}
    </select>
);

export const CreatureDesign: React.FC = () => {
    //TODO Reikia visų pilių imigų
    // React way foreach elements
    return (
        <div>
            <RenderList />
        </div>
    );
};
