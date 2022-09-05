import React, {useContext} from 'react';
import styles from './Favorite.module.scss'
import Item from "../Home/Item/Item";
import MarketDataContext from "../../Context/AppContext";
import InsideHeader from "../../Components/InsideHeader/InsideHeader";
import Button from "../../Components/Button/Button";

const Favorite = () => {
    const {favoriteItems, cleanUpFavorites} = useContext(MarketDataContext)

    return (
        <>
            {
                favoriteItems.length
                    ?
                    <>
                        <InsideHeader
                            title={'Empty the favorites'}
                            nameItem={'favorites'}
                            cleanUpAllHandler={() => cleanUpFavorites(favoriteItems.length)}
                        />
                        <div className={styles.items}>
                            {favoriteItems.map(item =>
                                <Item key={item.id}
                                      itemId={item.itemId}
                                      title={item.title}
                                      price={item.price}
                                      img={item.img}
                                />
                            )
                            }
                        </div>
                    </>
                    :
                    <div className={styles.textFavoriteIsClean}>
                        Nothing added yet
                        <Button back={true}>
                            ❮ Back
                        </Button>
                    </div>
            }

        </>
    );
};

export default Favorite;

