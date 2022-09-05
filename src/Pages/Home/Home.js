import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss';
import Item from "./Item/Item";
import axios from "axios";
import {createPages} from "../../Components/Utils/pageCreator";
import {Paginator} from "../../Components/Paginator/Paginator";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [sneakers, setSneakers] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    //pagination
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;
    const pagesCount = Math.ceil(totalItems / limit)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        async function fetchData(currentPage, limit) {
            const getAllItems = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/sneakers')
            const response = await axios.get(`https://62fe273041165d66bfb99d5a.mockapi.io/sneakers?page=${currentPage}&limit=${limit}`)
            setSneakers(response.data)
            setTotalItems(getAllItems.data.length)
            setIsLoading(false)
        }

        fetchData(currentPage, limit)
    }, [currentPage])

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
                    {isLoading
                        ?
                        [...Array(8)].map(item => <Item key={item} isLoading={isLoading}/>)
                        :
                        sneakers.filter((item) =>
                            item.title.toLowerCase().includes(searchValue.toLowerCase()),
                        ).map(item =>
                            <Item
                                key={item.id}
                                itemId={item.id}
                                title={item.title}
                                price={item.price}
                                img={item.img}
                                isLoading={isLoading}
                            />
                        )
                    }
                </div>
            </div>
           <Paginator pages={pages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Home;