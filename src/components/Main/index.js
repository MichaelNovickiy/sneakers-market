import React, {useEffect, useState} from 'react';
import styles from './Main.module.scss';
import Item from "../Item/Item";
import axios from "axios";

const Index = () => {
    let [sneakers, setSneakers] = useState([]);
    let [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/sneakers')
            setSneakers(response.data)
        }
        fetchData()
    }, [])

    let searchValueHandler = (e) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className={styles.main}>
            <div className={styles.titlePlusSearch}>
                <div className={styles.title}>NEW ARRIVAL</div>
                <input className={styles.search} placeholder='Search...'
                       onChange={searchValueHandler}
                       value={searchValue}/>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    {sneakers.filter((item) =>
                        item.title.toLowerCase().includes(searchValue.toLowerCase()),
                    ).map(item =>
                        <Item key={item.id}
                              title={item.title}
                              price={item.price}
                              img={item.img}/>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;