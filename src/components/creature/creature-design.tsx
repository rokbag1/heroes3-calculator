import React from "react";

export interface Castle  {
    id: number;
    name: string;
    keyWord: string;
    town: string;
};

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
    },
    
];

//THATS how react is working with object arrays
const SelectCastle = (): JSX.Element => (
    <div className="castle-images">
        {castles.map(item => (
            <div className="castle-image" key={item.id}><img src={`src/images/towns/${item.town}.gif`} alt="image" /></div>
        ))}
    </div>
);

export const CreatureDesign: React.FC = () => {
    //TODO Reikia visų pilių imigų
    // React way foreach elements
    return (
        <div>
            <div className="select-castle">First select town</div>
            <SelectCastle />
        </div>
    );
};
