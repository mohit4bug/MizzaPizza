import styles from '@/styles/pizza.module.scss';
import Image from 'next/image';
import pizzaImg from '../assets/images/pizza.png'
import Link from 'next/link';

const Pizza = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`}>
                <div className={styles.pizza}>
                    <Image src={pizzaImg} width={250} height={250} alt='pizza' style={{ objectFit: "contain" }} />
                </div>
            </Link>
            <p className={styles.pizzaName}>{pizza.title}</p>
            <p className={styles.price}>₹{pizza?.newPrices[0]}</p>
            <p className={styles.discountPrice}>₹{pizza?.oldPrices[0]}</p>
            <p className={styles.desc}>
                {pizza.desc}
            </p>
        </div>
    )
}

export default Pizza