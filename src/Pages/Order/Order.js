import React, {useContext, useRef, useState} from 'react';
import styles from './Order.module.scss'
import Button from "../../Components/Button/Button";
import MarketDataContext from "../../Context/AppContext";

const Order = () => {
    const {addOrder, sendOrder, setSendOrder} = useContext(MarketDataContext)

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
            {sendOrder
                ?
                <>
                    <div className={styles.orderNumber}>Your order number: {sendOrder}</div>
                    <div>Go back to the list of products:
                        <Button className={styles.buttonBack}
                            back={true}
                                onClick={() => setSendOrder(null)}>
                            ❮ Back
                        </Button>
                    </div>
                </>
                :
                <form action="" className={styles.form} onSubmit={sendDataOrder}>
                    <div className={styles.inputValues}>
                        <label htmlFor="firstName">First Name:</label>
                        <input id="firstName" type="text" ref={firstNameRef} required/>
                    </div>
                    <div className={styles.inputValues}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input id="lastName" type="text" ref={lastNameRef} required/>
                    </div>
                    <div className={styles.inputValues}>
                        <label htmlFor="mobile">Enter your phone number:</label>
                        <div className={styles.inputPhone}>
                            <input type="tel" id="phone" name="phone"
                                   pattern="[0-9]{12}"
                                   ref={mobileRef}
                                   required/>
                            <small>Format: 375291234567</small>
                        </div>
                    </div>
                    <Button className={styles.button} type="submit">Send ❯</Button>
                </form>
            }
        </div>
    );
};

export default Order;