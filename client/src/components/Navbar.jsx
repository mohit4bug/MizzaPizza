import styles from '@/styles/navbar.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartQty = useSelector(state => state.cart.cartQuantity)

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}><Link href="/">Mizza</Link></h1>

                <span className={styles.cartIcon}>
                    <Badge badgeContent={cartQty} color="warning">
                        <Link href="/cart"><ShoppingCartIcon /></Link>
                    </Badge>
                </span>
            </nav>
        </div>
    )
}

export default Navbar