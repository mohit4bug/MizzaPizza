import styles from '@/styles/product.module.scss';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import pizzaImage from '../../assets/images/pizza.png';
import pizzaIcon from '../../assets/images/pizzaIcon.png'
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/cartSlice';
import Link from 'next/link';

const Product = ({ pizza }) => {

    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(pizza.newPrices[0])
    const [extras, setExtras] = useState([]);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number)
    }



    const handleSize = (sizeIndex) => {
        const difference = pizza.newPrices[sizeIndex] - pizza.newPrices[size];
        setSize(sizeIndex);
        changePrice(difference)
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price)
            setExtras((prev) => [...prev, option])
        }
        else {
            changePrice(-option.price)
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ ...pizza, extras, price, qty }));
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={pizzaImage} alt='pizza' fill="layout" style={{ objectFit: "contain" }} />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.pizzaName}>{pizza.title}</h1>
                <p className={styles.price}>₹{price}</p>
                <p className={styles.desc}>
                    {pizza.desc}
                </p>

                <h1 className={styles.title}>Choose size:</h1>
                <div className={styles.sizes}>

                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>S</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={35} onClick={() => handleSize(0)} />
                    </span>
                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>M</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={45} onClick={() => handleSize(1)} />
                    </span>
                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>L</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={55} onClick={() => handleSize(2)} />
                    </span>

                </div>
                <h1 className={styles.title}>Choose additional ingredients:</h1>
                <div className={styles.additionalIngredients}>
                    {
                        pizza.extras?.map((item, index) => (
                            <div className={styles.ingredient} key={index}>
                                <input type="checkbox" id='extraCheese' onChange={(e) => handleChange(e, item)} />
                                <label htmlFor="extraCheese">{item?.text}</label>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.quantity}>
                    <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} />
                    <button onClick={handleAddToCart}><Link href="/cart">Add to cart</Link></button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id} `)
    return {
        props: {
            pizza: res.data.data
        }
    }
}
export default Product