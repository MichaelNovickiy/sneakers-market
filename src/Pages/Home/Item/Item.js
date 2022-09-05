import styles from "./Item.module.scss";
import React, {useContext} from "react";
import MarketDataContext from "../../../Context/AppContext";
import Button from "../../../Components/Button/Button";
import Loading from "../LoadingContainer/Loading";

const Item = ({itemId, img, title, price, isLoading}) => {

    const {
        addItemCart,
        isItemAddedCart,
        addFavoriteItem,
        isItemAddedFavorite
    } = useContext(MarketDataContext)

    return (
        <>
            {isLoading
                ?
                <Loading/>
                :
                <div className={styles.main}>
                    <div className={styles.itemBlock}>
                        <div className={styles.favorite}>
                            <img
                                src={isItemAddedFavorite(title) ? "img/favorite_btn_added.png" : "img/favorite_btn.png"}
                                alt="favorite"
                                onClick={() => {
                                    addFavoriteItem({img, title, price, itemId})
                                }}
                            />
                        </div>
                        <img src={img} alt="Sneakers"/>
                        <div className={styles.titleItem}>{title}</div>
                        <div className={styles.contentPriceWithBtn}>
                            <div>{price}$</div>
                            <Button onClick={() => addItemCart({img, title, price, itemId})}
                                    className={isItemAddedCart(itemId) ? styles.buttonAddItem : null}>
                                {isItemAddedCart(itemId) ? "Added to Bag" : 'Add to Bag'}
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};
export default Item;