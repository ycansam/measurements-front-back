import { Link } from "react-router-dom";
import styles from './Header.module.css'
import CheckUserAuthenticationHooks from "../CheckUserAuthentication/hooks/CheckUserAuthentication.hooks";
import { Navigate } from "react-router";
import PagePaths from "../../page-paths";
import React from "react";
const Header: React.FC = () => {

    const { isNotAuthenticated } = CheckUserAuthenticationHooks();
    if (isNotAuthenticated) return <Navigate to={PagePaths.LOGIN} replace={true}></Navigate>
    return (
        <nav className={styles.navContainer}>
            <h1 className={styles.title}>Mesuras de Vinos</h1>
        </nav>
    )
}
export default Header;

