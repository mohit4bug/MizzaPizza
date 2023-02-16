import styles from '@/styles/carousel.module.scss';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import pizzaImg1 from '../assets/images/pizzaImg1.jpg';
import pizzaImg2 from '../assets/images/pizzaImg2.jpg';
import pizzaImg3 from '../assets/images/pizzaImg3.jpg';

const pizzaImages = [
    pizzaImg1,
    pizzaImg2,
    pizzaImg3
]



const Carousel = () => {

    // Button change slide
    const [transform, setTransform] = useState(0);
    const handleTransform = (side) => {

        if (side === "r") {
            setTransform(transform !== 0 ? transform - 1 : 2)
        }
        if (side === "l") {
            setTransform(transform !== 2 ? transform + 1 : 0)
        }
    }

    // Auto change slide
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleTransform("r")
        }, 5000)

        return () => {
            clearInterval(intervalId);
        }

    }, [transform])

    return (
        <div className={styles.container}>
            <span className={`${styles.arrows} ${styles.leftArrow}`} onClick={() => handleTransform("l")}>
                <ArrowBackIosNewRoundedIcon fontSize='large' />
            </span>
            <div className={styles.wrapper} style={{ transform: `translatex(-${transform * 100}vw)` }}>
                {
                    pizzaImages.map((img, index) => (
                        <div className={styles.image} key={index}>
                            <Image src={img} fill="layout" alt="pizza" style={{ objectFit: "cover" }} />
                        </div>
                    ))
                }
            </div>
            <span className={`${styles.arrows} ${styles.rightArrow}`} onClick={() => handleTransform("r")}>
                <ArrowForwardIosRoundedIcon fontSize='large' />
            </span>
        </div >
    )
}

export default Carousel