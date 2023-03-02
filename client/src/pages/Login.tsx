import React from "react";
import Header from "../components/Header/Header";
import FormUserAuthentication from "../components/Forms/FormUserAuthentication/FormUserAuthentication";


const Login: React.FC = () => {

    return (
        <div>
            <Header />
            <div>
                <FormUserAuthentication authenticationType="login" />
            </div>
        </div>
    )
}

export default Login;