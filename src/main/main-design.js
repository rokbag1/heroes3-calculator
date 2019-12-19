import React from 'react'
import './main-design.scss'
import Creature from './creature/creature-design'

export default function MainDesign() {
    return (
        
        //Main stuff in website
        <div className="body-class">
            <div className="body-title">
                <h4> Heroes of Might and Magic III calculator </h4>
            </div>

            {/* TODO select one of the blocks and create logic */}
            <div className="body-block">
                <div className="body-block__creature">
                    <Creature />
                </div>

                <div className="body-block__quantity">
                </div>

                <div className="body-block__item"> {/* Item can also be building */}
                </div>

            </div>
        </div>
    )
}
