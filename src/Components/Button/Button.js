import React, {useContext} from 'react';
import classes from './Button.module.css';
import {Link} from "react-router-dom";
import MarketDataContext from "../../Context/AppContext";

const Button = (props) => {

    const {bntDisabled} = useContext(MarketDataContext)

    const button = <button
        className={`${classes.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.onClick}
        disabled={bntDisabled}
    >
        {props.children}
    </button>

    return (
        <>
            {props.back
                ?
                <Link to={process.env.PUBLIC_URL + '/'}>{button}</Link>
                : button
            }
        </>

    );
};

export default Button;