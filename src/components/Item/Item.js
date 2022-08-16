import styles from "./Item.module.scss";
import React from "react";

const Item = () => {
    return (
        <div className={styles.itemBlock}>
            <img src="img/item1.png" alt="Sneakers"/>
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className={styles.contentPrice}>
                <div className={styles.priceBlock}>
                    <p className={styles.title}>Price:</p>
                    <p className={styles.price}>550$</p>
                </div>
                <img src="img/plus.png" alt="plus"/>
            </div>
        </div>
    );
};
export default Item;