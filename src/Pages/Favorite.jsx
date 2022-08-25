import React, {useContext} from 'react';
import styles from './Favorite.module.scss'
import Item from "../components/Item/Item";
import MarketDataContext from "../Context/AppContext";

const Favorite = () => {

    const {favoriteItems} = useContext(MarketDataContext)

    return (
        <>
            <div className={styles.title}>Favorite items</div>
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