import styles from '@/styles/cart.module.scss';
import Image from 'next/image';
import pizzaImage from '../../assets/images/pizza.png'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useState } from 'react';

const Cart = () => {

    const [couponMenu, setCouponMenu] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
                {/* single product */}
                <div className={styles.product}>
                    <div className={styles.leftInner}>
                        <span className={styles.pizzaImageWrapper}>
                            <Image src={pizzaImage} height={100} width={100} alt="pizza" />
                        </span>
                    </div>
                    <div className={styles.rightInner}>
                        <p className={styles.name}>coralzo</p>
                        <p className={styles.extras}><strong>Extras: </strong> cheese,spicy sauce</p>
                        <p className={styles.price}><strong>Price: </strong>₹300</p>
                        <p className={styles.quantity}><strong>Qty: </strong>5</p>
                    </div>
                </div>
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
                        <p className={styles.value}>₹700</p>
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
                                ₹700
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