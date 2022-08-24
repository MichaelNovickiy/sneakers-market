import styles from "./Item.module.scss";
import React, {useContext} from "react";
import MarketDataContext from "../../Context/AppContext";

const Item = ({itemId, img, title, price, buttonAddCart = null}) => {

    const {addItemCart, isItemAddedCart, addFavoriteItem, isItemAddedFavorite} = useContext(MarketDataContext)

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
                <div className={styles.contentPrice}>
                    <div className={styles.columnContentPrice}>
                        <div>{title}</div>
                        <div>{price}</div>
                    </div>
                    {
                        buttonAddCart
                            ?
                            <img src={isItemAddedCart(itemId) ? "img/btn_done.svg" : "img/btn.png"}
                                 alt="plus"
                                 onClick={() => addItemCart({img, title, price, itemId})}/>
                            : null
                    }
                </div>
            </div>
        </div>
    );
};
export default Item;