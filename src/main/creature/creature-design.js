import React from 'react'

const castles = [ 
    { 
        id : 1,
        name : 'Castle',
        keyWord : 'CA',
        folder : 'castle'
     },

     { 
        id : 2,
        name : 'Castle',
        keyWord : 'CA',
        folder : 'castle'
     },

     { 
        id : 3,
        name : 'Castle',
        keyWord : 'CA',
        folder : 'castle'
     }
];

//THATS how react is working with object arrays
const RenderList = () => {
    return (
        <select>
            {castles.map(item => (
                <option key={ item.id }>
                    {item.name}
                </option>
            ))}
        </select> 
    )
};

export default function CreatureDesign() {
    //TODO Reikia visų pilių imigų
    // React way foreach elements
    return (
        <div>
            <RenderList />
        </div>
    )
}
