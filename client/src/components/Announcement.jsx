import styles from '@/styles/announcement.module.scss';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Announcement = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Hurry up! Limited offers.
            </p>
            <LocalOfferIcon fontSize='small' />
        </div>
    )
}

export default Announcement