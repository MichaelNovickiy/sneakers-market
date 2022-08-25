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
                <div className={styles.searchBlock}>
                    <input className={styles.search}
                           placeholder='Search'
                           onChange={searchValueHandler}
                           value={searchValue}/>
                    <svg className={styles.searchIcon} fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
                        <path
                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    {sneakers.filter((item) =>
                        item.title.toLowerCase().includes(searchValue.toLowerCase()),
                    ).map(item =>
                        <Item key={item.id}
                              itemId={item.id}
                              title={item.title}
                              price={item.price}
                              img={item.img}
                              buttonAddCart={true}
                        />
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;