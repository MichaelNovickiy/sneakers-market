import React, {useContext} from 'react';
import styles from './Favorite.module.scss'
import Item from "../components/Item/Item";
import MarketDataContext from "../Context/AppContext";

const Favorite = () => {

    const {favoriteItems, cleanUpFavorites} = useContext(MarketDataContext)

    return (
        <>
            <div className={styles.favoriteHeader}>
                <div className={styles.title}>Favorite items</div>
                <div className={styles.cleanText}
                     onClick={() => cleanUpFavorites(favoriteItems.length)}
                >
                    <img src="/img/trash.png" alt="trash"/>
                    Empty the favorites
                </div>
            </div>
            {
                favoriteItems.length
                    ?
                    <div className={styles.items}>
                        {favoriteItems.map(item =>
                            <Item key={item.id}
                                  itemId={item.id}
                                  title={item.title}
                                  price={item.price}
                                  img={item.img}/>
                        )
                        }
                    </div>
                    :
                    <div className={styles.textFavoriteIsClean}>
                        Nothing added yet
                    </div>
            }

        </>
    );
};

export default Favorite;