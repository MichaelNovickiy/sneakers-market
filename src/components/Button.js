import React from 'react';
import classes from './Button.module.css';
import {Link} from "react-router-dom";

const Button = (props) => {

    const button = <button
        className={`${classes.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>

    return (
        <>
            {props.back
                ?
                <Link to={"/"}>{button}</Link>
                : button
            }
        </>

    );
};

export default Button;