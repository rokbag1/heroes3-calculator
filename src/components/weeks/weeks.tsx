import React, { useContext } from "react";

import { Week } from "../main-design/contracts";
import { MainContext } from "../main-design/main-context";
import Popup from "reactjs-popup";
import { getConclusion } from "src/shared/helpers/popup-helpers";

const PutWeek = ({ creature, week, setWeek, town }: MainContext): JSX.Element => (
    <div>
        <div className="week-input">
            <label>Week:</label>
            <input type="number" onChange={(e) => setWeek({ value: e.target.value })}></input>
        </div>
        {week != null && week.value.length > 0 ? (
            <div className="submit-button">
                <Popup trigger={<button className="button"> Submit</button>} modal>
                    {(close) => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="title"> Monsters is counted player !!! </div>
                            <div className="content">
                                <div className="text">You will have to face: </div>
                                <div className="number">5 </div>
                                <div className="name">{creature?.name}</div>
                                <img src={`src/images/creatures/${town?.town}/${creature?.image}.bmp`}></img>
                            </div>
                            <div className="conclusion">{creature?.power != null ? getConclusion(creature?.power) : ""}</div>
                            <div className="actions">
                                <button
                                    className=""
                                    onClick={() => {
                                        console.log("modal closed ");
                                        close();
                                    }}
                                >
                                    Restart selections
                                </button>
                                <button
                                    className=""
                                    onClick={() => {
                                        console.log("modal closed ");
                                        close();
                                    }}
                                >
                                    Edit selections
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        ) : null}
    </div>
);

export const WeekDesign: React.FC = () => {
    //useContext hook to receive all data from MainContext
    const castleContext = useContext(MainContext);
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle

    // React way foreach elements
    return (
        <div>
            <div className="calculator-block-title add-item">Write a week</div>
            <PutWeek {...castleContext} />
        </div>
    );
};
