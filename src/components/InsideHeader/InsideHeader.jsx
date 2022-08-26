import styles from "./InsideHeader.module.scss";
import React from "react";

const InsideHeader = (props) => {
    return (
        <>
            <div className={styles.favoriteHeader}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.cleanText}
                     onClick={props.cleanUpAllHandler}
                >
                    <img src="/img/trash.png" alt="trash"/>
                    Empty the {props.nameItem}
                </div>
            </div>
        </>
    );
};
export default InsideHeader;