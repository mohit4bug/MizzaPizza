import React from 'react'
import styles from '@/styles/order.module.scss';
import { useSelector } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

const Order = ({ order }) => {

    const status = order.status;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.progress
        if (index - status > 1) return styles.notdone
    }

    const cart = useSelector(state => state.cart)
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.details}>
                    <p className={styles.extras}><strong>OrderID: </strong>{order._id}</p>
                    <p className={styles.price}><strong>Customer: </strong>{order.customer}</p>
                    <p className={styles.address}><strong>Address: </strong>{order.address}</p>
                    <p className={styles.quantity}><strong>Total: </strong>₹{order.total}</p>
                </div>
                <hr />
                <div className={styles.status}>
                    <p className={statusClass(0)}><strong>Payment: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={statusClass(1)}><strong>Preparing: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={statusClass(2)}><strong>On the way: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                    <p className={statusClass(3)}><strong>Deliverd: </strong> <span className={styles.doneIcon}> <CheckCircleIcon /></span></p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.bill}>
                    <p className={styles.title}>Bill details</p>
                    <span className={styles.billItem}>
                        <p className={styles.key}>
                            Item total (incl. taxes)
                        </p>
                        <p className={styles.value}>₹{order.total}</p>
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
                                ₹{order.total}
                            </strong>
                        </p>
                    </span>

                    <button disabled>Paid!</button>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: { order: res.data.data }
    }
}

export default Order