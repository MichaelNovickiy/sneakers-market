import React from 'react';
import styles from './Main.module.scss';
import Item from "../Item/Item";


let sneakers = [
    {
        title: 'Nike Blazer Mid Suede',
        price: '550$',
        img: 'img/Sneakers/Nike Blazer Mid \'77 PRM.jpeg'
    },
    {
        title: 'Jumpman Two Trey PSG',
        price: '250$',
        img: 'img/Sneakers/Jumpman Two Trey PSG.jpg'
    },
    {
        title: 'Nike Air Max Flyknit Racer',
        price: '350$',
        img: 'img/Sneakers/Nike Air Max Flyknit Racer.jpg'
    },
    {
        title: 'Nike Air Max Plus',
        price: '210$',
        img: 'img/Sneakers/Nike Air Max Plus.jpg'
    },
    {
        title: 'Nike Dunk Low Unlocked By You',
        price: '240$',
        img: 'img/Sneakers/Nike Dunk Low Unlocked By You.jpg'
    },
]

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.titlePlusSearch}>
                <div className={styles.title}>NEW ARRIVAL</div>
                <input className={styles.search} placeholder='Search...'/>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    {
                        sneakers.map(item =>
                            <Item title={item.title}
                                  price={item.price}
                                  img={item.img}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;