import React from "react";

const castles = [
    {
        id: 1,
        name: "Castle",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 2,
        name: "Castle",
        keyWord: "CA",
        folder: "castle"
    },

    {
        id: 3,
        name: "Castle",
        keyWord: "CA",
        folder: "castle"
    }
];

//THATS how react is working with object arrays
const RenderList = (): JSX.Element => (
    <select>
        {castles.map(item => (
            <option key={item.id} value={item.name}>
                {item.name}
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
