import React from 'react'
import styles from '@/styles/order.module.scss';
import { useSelector } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Order = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.details}>
                    <p className={styles.extras}><strong>OrderID: </strong>Pizza</p>
                    <p className={styles.price}><strong>Customer: </strong>₹200</p>
                    <p className={styles.quantity}><strong>Address: </strong>176/59 pratap nager</p>
                    <p className={styles.quantity}><strong>Total: </strong>₹200</p>
                </div>
                <hr />
                <div className={styles.status}>
                    <p className={styles.extras}><strong>Payment: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={styles.price}><strong>Preparing: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={styles.quantity}><strong>On the way: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={styles.quantity}><strong>Deliverd: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.bill}>
                    <p className={styles.title}>Bill details</p>
                    <span className={styles.billItem}>
                        <p className={styles.key}>
                            Item total (incl. taxes)
                        </p>
                        <p className={styles.value}>₹{cart?.total}</p>
                    </span>
                    <span className={styles.billItem}>
                        <p className={styles.key}>
                            Delivery charges
                        </p>
                        <p className={`${styles.value} ${styles.color}`}>FREE</p>
                    </span>
                    <span className={styles.billItem}>
                        <p className={styles.key}>
                            Grand total
                        </p>
                        <p className={styles.value}>
                            <strong>
                                ₹{cart?.total}
                            </strong>
                        </p>
                    </span>

                    <button disabled>Paid!</button>
                </div>
            </div>
        </div>
    )
}

export default Order