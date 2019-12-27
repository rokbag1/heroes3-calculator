import React, { useContext } from "react";

import { MainContext } from "../main-design/main-context";

import "./template-component.scss";

export const Template: React.FC = () => {
    const castleContext = useContext(MainContext);

    return (
        //Main stuff in website
        <div className="template">{castleContext.town?.name}</div>
    );
};
