import React from 'react';
import styles from './Main.module.scss';
import Item from "../Item/Item";


const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.titlePlusSearch}>
                <div className={styles.title}>NEW ARRIVAL</div>
                <input className={styles.search} placeholder='Search...'/>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <Item />
                </div>
            </div>
        </div>
    );
};

export default Main;