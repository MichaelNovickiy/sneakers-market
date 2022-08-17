import styles from "./Item.module.scss";
import React from "react";

const Item = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.itemBlock}>
                <img src={props.img} alt="Sneakers"/>
                <div className={styles.contentPrice}>
                    <div className={styles.columnContentPrice}>
                        <div>{props.title}</div>
                        <div>{props.price}</div>
                    </div>

                    <img src="img/plus.png" alt="plus"/>
                </div>

            </div>
        </div>
    );
};
export default Item;