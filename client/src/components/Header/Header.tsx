import { Link } from "react-router-dom";
import styles from './Header.module.css'
const Header: React.FC = () => {
    return (
        <nav className={styles.navContainer}>
            <Link to={'/login'}><h1 className={styles.title}>Mesuras de Vinos</h1></Link>
        </nav>
    )
}
export default Header;

