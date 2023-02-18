import styles from '@/styles/cart.module.scss';
import Image from 'next/image';
import pizzaImage from '../../assets/images/pizza.png'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios';
import { useRouter } from 'next/router';
import { resetCart } from 'redux/cartSlice';



const Cart = () => {


    const [couponMenu, setCouponMenu] = useState(false);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const amount = cart.total;
    const currency = "USD";
    const style = { "layout": "vertical" };
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const router = useRouter()


    // After paypal done its payment
    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data)
            if (res.data.success) {
                router.push("/order/" + res.data?.data?._id);
                dispatch(resetCart());
            }
        } catch (error) {
            console.log(error);
        }
    }


    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const shipping = details.purchase_units[0].shipping;
                        createOrder({
                            customer: shipping.name.full_name,
                            address: shipping.address.address_line_1,
                            total: cart.total,
                            method: 1
                        })
                    });
                }}
            />
        </>
        );
    }


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

                    {!showPaymentOptions && <button onClick={() => setShowPaymentOptions(true)}>Checkout</button>}
                    {showPaymentOptions && <button disabled className={styles.cod}>Cash on delivery (Not available)</button>}
                    {showPaymentOptions && <PayPalScriptProvider
                        options={{
                            "client-id": "ATzqD8aASVAyn02tw4LYWAqosn_uMuBSXoiywmdR4xMwhKmqgUQHr9xhfo9-W8cIpx4EblUEMY4jzp_a",
                            components: "buttons",
                            currency: "USD"
                        }}
                    >
                        <ButtonWrapper
                            currency={currency}
                            showSpinner={false}
                        />
                    </PayPalScriptProvider>}
                </div>
            </div>
        </div>
    )
}

export default Cart