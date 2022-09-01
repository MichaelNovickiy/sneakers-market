import React, {useContext} from 'react';
import styles from './Favorite.module.scss'
import Item from "../Main/Item/Item";
import MarketDataContext from "../../Context/AppContext";
import InsideHeader from "../../components/InsideHeader/InsideHeader";
import Button from "../../components/Button/Button";

const Favorite = () => {

    const {favoriteItems, cleanUpFavorites, onClickBackButton} = useContext(MarketDataContext)

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
                                      buttonAddCart={true}
                                />
                            )
                            }
                        </div>
                    </>
                    :
                    <div className={styles.textFavoriteIsClean}>
                        Nothing added yet
                        <Button onClickBackButton={onClickBackButton} back={true}>
                            ❮ Back
                        </Button>
                    </div>
            }

        </>
    );
};

export default Favorite;

