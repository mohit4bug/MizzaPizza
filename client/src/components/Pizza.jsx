import styles from '@/styles/pizza.module.scss';
import Image from 'next/image';
import pizzaImg from '../assets/images/pizza.png'

const Pizza = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pizza}>
                <Image src={pizzaImg} width={250} height={250} alt='pizza' style={{ objectFit: "contain" }} />
            </div>
            <p className={styles.pizzaName}>Sicilian Pizza</p>
            <p className={styles.price}>₹300</p>
            <p className={styles.discountPrice}>₹500</p>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a molestias illo modi magni ipsum!
            </p>
        </div>
    )
}

export default Pizza