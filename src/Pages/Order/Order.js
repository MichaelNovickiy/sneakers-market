import React, {useContext, useRef} from 'react';
import styles from './Order.module.scss'
import Button from "../../Components/Button/Button";
import MarketDataContext from "../../Context/AppContext";

const Order = () => {

    const {addOrder} = useContext(MarketDataContext)

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();

    const sendDataOrder = (event) => {
        event.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const mobile = mobileRef.current.value;

        addOrder(firstName, lastName, mobile)
    }

    return (
        <div className={styles.orderBlock}>
            <form action="" className={styles.form} onSubmit={sendDataOrder}>
                <div className={styles.inputValues}>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" type="text" ref={firstNameRef}/>
                </div>
                <div className={styles.inputValues}>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" type="text" ref={lastNameRef}/>
                </div>
                <div className={styles.inputValues}>
                    <label htmlFor="mobile">Enter your phone number:</label>
                    <div className={styles.inputPhone}>
                        <input type="tel" id="phone" name="phone"
                               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                               ref={mobileRef}
                               required/>
                        <small>Format: 123-45-678-90-12</small>
                    </div>
                </div>
                <Button className={styles.button} type="submit">Send ❯</Button>
            </form>
        </div>
    );
};

export default Order;