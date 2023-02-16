import styles from '@/styles/footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>

                {/* 1 */}
                <div className={styles.linkSection}>
                    <div className={styles.linkTitle}>Order now</div>
                    <ul className={styles.linkItems}>
                        <li>Deals</li>
                        <li>Pizza</li>
                        <li>Sides</li>
                        <li>Drinks</li>
                        <li>Desserts</li>
                    </ul>
                </div>
                <div className={styles.linkSection}>
                    <div className={styles.linkTitle}>About</div>
                    <ul className={styles.linkItems}>
                        <li>About us</li>
                        <li>Contactless delivery</li>
                        <li>Nutrition</li>
                    </ul>
                </div>
                <div className={styles.linkSection}>
                    <div className={styles.linkTitle}>Our policies</div>
                    <ul className={styles.linkItems}>
                        <li>Privacy</li>
                        <li>Terms & conditions</li>
                        <li>Reponsibility disclosure</li>
                        <li>FAQs & help</li>
                    </ul>
                </div>
                <div className={styles.linkSection}>
                    <div className={styles.linkTitle}>Visit Pizza</div>
                    <ul className={styles.linkItems}>
                        <li>Locate a store</li>
                        <li>Global blog</li>
                    </ul>
                </div>
            </div>
            <div className={styles.socialLinks}>

                <span className={styles.socialIcon}>
                    <FacebookIcon fontSize='large' />
                </span>
                <span className={styles.socialIcon}>
                    <InstagramIcon fontSize='large' />
                </span>
                <span className={styles.socialIcon}>
                    <TwitterIcon fontSize='large' />
                </span>
                <span className={styles.socialIcon}>
                    <YouTubeIcon fontSize='large' />
                </span>
            </div>
            <div className={styles.copyRight}>
                <p className={styles.descText}>
                    Order a delicious pizza on the go, anywhere, anytime. Mizza is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply.
                    Hurry up and place your order now!
                </p>
                <p className={styles.copyRightText}>
                    © 2023 Mizza India. All rights reserved. License Number: 100170110XXXX
                </p>
            </div>
        </div>
    )
}

export default Footer