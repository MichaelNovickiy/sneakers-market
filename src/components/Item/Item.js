import styles from "./Item.module.scss";
import React, {useContext} from "react";
import MarketDataContext from "../../Context/AppContext";
import Button from "../Button";

const Item = ({itemId, img, title, price, buttonAddCart = null}) => {

    const {addItemCart, isItemAddedCart, addFavoriteItem, isItemAddedFavorite, bntDisabled} = useContext(MarketDataContext)

    return (
        <div className={styles.main}>
            <div className={styles.itemBlock}>
                <div className={styles.favorite}>
                    <img src={isItemAddedFavorite(title) ? "img/favorite_btn_added.png" : "img/favorite_btn.png"}
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
                    {
                        buttonAddCart
                            ?
                            <>
                                <Button onClick={() => addItemCart({img, title, price, itemId})}
                                        className={isItemAddedCart(itemId) ? styles.buttonAddItem : null}
                                >
                                    {isItemAddedCart(itemId) ? "Added to Bag" : 'Add to Bag'}
                                </Button>
                            </>
                            : null
                    }
                </div>
            </div>
        </div>
    );
};
export default Item;