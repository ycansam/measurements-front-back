import React from "react";
import Header from "../components/Header/Header";
import FormUserAuthentication from "../components/Forms/FormUserAuthentication/FormUserAuthentication";

const Register: React.FC = () => {

    return (
        <div>
            <Header />
            <FormUserAuthentication authenticationType="register" />

        </div>
    )
}

export default Register;