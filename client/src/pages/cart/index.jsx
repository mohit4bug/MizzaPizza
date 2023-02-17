import styles from '@/styles/cart.module.scss';
import Image from 'next/image';
import pizzaImage from '../../assets/images/pizza.png'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {

    const [couponMenu, setCouponMenu] = useState(false);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)



    return (
        <div className={styles.container}>
            <div className={styles.left}>

                {
                    cart.products.map(prod => (
                        <div className={styles.product} key={prod._id}>
                            <div className={styles.leftInner}>
                                <span className={styles.pizzaImageWrapper}>
                                    <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                                </span>
                            </div>
                            <div className={styles.rightInner}>
                                <p className={styles.name}>{prod.title}</p>
                                <p className={styles.extras}><strong>Extras: </strong>{prod.extras.map((item) => {
                                    return item.text
                                })}</p>
                                <p className={styles.price}><strong>Price: </strong>₹{prod.price}</p>
                                <p className={styles.quantity}><strong>Qty: </strong>{prod.qty}</p>
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className={styles.right}>
                <div className={styles.coupons}>
                    <div className={styles.couponToggle}>
                        <span className={styles.heading}> <VerifiedRoundedIcon fontSize='small' /> <p>Use coupons</p></span>
                        <span className={styles.toggleArrow} onClick={() => setCouponMenu(!couponMenu)}>
                            {!couponMenu ? <KeyboardArrowRightRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                        </span>
                    </div>
                    {couponMenu && (<div className={styles.availableCoupons}>
                        <div className={styles.singleCoupon}>
                            <input type="radio" name='coupon' />
                            <p id={styles.couponName}>None</p>
                        </div>
                        <div className={styles.singleCoupon}>
                            <input type="radio" name='coupon' />
                            <p id={styles.couponName}>MIZZAUSER1</p>
                        </div>
                    </div>)}
                </div>
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

                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart