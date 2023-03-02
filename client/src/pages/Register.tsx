import React from "react";
import Header from "../components/Header/Header";
import FormUserAuthentication from "../components/Forms/FormUserAuthentication/FormUserAuthentication";
import styles from '../styles/authenticationpages.module.css'

const Register: React.FC = () => {

    return (
        <div>
            <Header />
            <div className={styles.mainSection}>
                <FormUserAuthentication authenticationType="register" />
            </div>
        </div>
    )
}

export default Register;