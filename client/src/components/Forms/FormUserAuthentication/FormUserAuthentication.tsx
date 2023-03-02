import { useState, useCallback } from "react";
import InputWithLabel from "../Inputs/InputWithLabel/InputWIthLabel";
import SubmitButtonLogin from "./SubmitButtons/SubmitButtonLogin";
import SubmitButtonRegister from "./SubmitButtons/SubmitButtonRegister";
interface FormUserAuthentication {
    authenticationType: "register" | "login";
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const FormUserAuthentication: React.FC<FormUserAuthentication> = ({ authenticationType }) => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    }, [setState]);


    return (
        <form>
            <InputWithLabel label="Usuario" name="username" onChange={handleChange} value={state.username} />
            <InputWithLabel label="Contraseña" name="password" onChange={handleChange} value={state.password} />
            {authenticationType === "register" && <SubmitButtonRegister />}
            {authenticationType === "login" && <SubmitButtonLogin />}
        </form>
    )
}
export default FormUserAuthentication;