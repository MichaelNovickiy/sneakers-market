import React, {useContext} from 'react';
import styles from './CartOrderItem.module.scss'
import MarketDataContext from "../../../../Context/AppContext";

const CartOrderItem = (props) => {

    const {deleteCartItem} = useContext(MarketDataContext)

    const deleteCartItemHandler = (cartId) => {
        deleteCartItem(cartId)
    }

    return (
        <div className={styles.cartOrder}>
            <div className={styles.cartItem}>
                <img src={props.img} alt="Sneakers"/>
                <div className={styles.itemText}>
                    <div>{props.title}</div>
                    <div>{props.price}$</div>
                </div>
                <div className={styles.itemDelete}
                     onClick={() => deleteCartItemHandler(props.id)}
                >x
                </div>
            </div>
        </div>
    );
};

export default CartOrderItem;