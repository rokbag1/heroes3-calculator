import React, { useContext } from "react";
import { MainContext } from "../main-design/main-context";
import { QUANTITY } from "src/shared/data/quantity";

const SelectQuantity = ({ quantity, setQuantity }: MainContext): JSX.Element => {

    return (
        <div className="pick-game-item">
            {QUANTITY.map((item, index) => (
                  <div
                      className={`game-item ${item.id === quantity?.id ? "picked-item" : ""}`}
                      key={item.id}
                      onClick={() => setQuantity(item)}
                  >
                      <div className="game-item-block">
                          
                          <div className={`text-box-in-scroll ${index === 0 ? "first-element" : ""}`}>
                              <div className="text-in-scroll">{item.name}</div>
                          </div>
                      </div>
                  </div>
              ))
            }
    </div>
    );
};

export const QuantityDesign: React.FC = () => {
    // useState hook to save castle. castle => Selected castle, setCastle => function which do stuff for castle
    const castleContext = useContext(MainContext);
    // React way foreach elements
    return (
        <div>
            <div className="calculator-block-title">Select Quantity</div>
            {castleContext.town != null && castleContext.creature != null ? <SelectQuantity{...castleContext}  /> : null}
        </div>
    );
};
