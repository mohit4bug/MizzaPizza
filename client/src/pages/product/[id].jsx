import styles from '@/styles/product.module.scss';
import Image from 'next/image';
import pizzaImage from '../../assets/images/pizza.png';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import pizzaIcon from '../../assets/images/pizzaIcon.png'

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={pizzaImage} alt='pizza' fill="layout" style={{ objectFit: "contain" }} />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.pizzaName}>campagnola</h1>
                <p className={styles.price}>₹300</p>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla eligendi eveniet itaque illum sed molestiae, quisquam hic sequi blanditiis reprehenderit nam voluptatum esse ratione tempora saepe. Vero, vel nesciunt.
                </p>

                <h1 className={styles.title}>Choose size:</h1>
                <div className={styles.sizes}>

                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>S</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={35} />
                    </span>
                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>M</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={45} />
                    </span>
                    <span className={styles.sizeIcon}>
                        <span className={styles.value}>L</span>
                        <Image src={pizzaIcon} alt="pizza icon" width={55} />
                    </span>

                </div>
                <h1 className={styles.title}>Choose additional ingredients:</h1>
                <div className={styles.additionalIngredients}>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id='spicySauce' />
                        <label htmlFor="spicySauce">Spicy sauce</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id='garlicSauce' />
                        <label htmlFor="garlicSauce">Garlic sauce</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id='extraCheese' />
                        <label htmlFor="extraCheese">Extra cheese</label>
                    </div>
                </div>

                <div className={styles.quantity}>
                    <input type="number" min="1" />
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product