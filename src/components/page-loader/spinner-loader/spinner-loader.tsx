import React from "react";

import "./spinner-loader.scss";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const SpinnerLoader: React.FC<Props> = ({ className, children }) => (
    <div className={`spinner-loader ${className}`}>
        {children}
        <div className="loader" />
    </div>
);
