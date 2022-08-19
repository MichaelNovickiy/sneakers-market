import styles from "./Item.module.scss";
import React, {useContext} from "react";
import MarketDataContext from "../../Context/AppContext";

const Item = ({img, title, price, itemId}, ...props) => {

    const {addItemCart} = useContext(MarketDataContext)

    const onClickAddItem = ({img, title, price, itemId}) => {
       addItemCart({img, title, price, itemId})
    }

    return (
        <div className={styles.main}>
            <div className={styles.itemBlock}>
                <img src={img} alt="Sneakers"/>
                <div className={styles.contentPrice}>
                    <div className={styles.columnContentPrice}>
                        <div>{title}</div>
                        <div>{price}</div>
                    </div>

                    <img src="img/plus.png" alt="plus" onClick={() => onClickAddItem({img, title, price, itemId})}/>
                </div>

            </div>
        </div>
    );
};
export default Item;