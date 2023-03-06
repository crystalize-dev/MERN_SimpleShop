import React from 'react';
import "./icon.css"
import classes from "classnames"


const Icon = ({children, className, onClick}) => {
    return (
        <span className={classes("material-symbols-rounded", className)} onClick={onClick}>
            {children}
        </span>
    );
};

export default Icon;