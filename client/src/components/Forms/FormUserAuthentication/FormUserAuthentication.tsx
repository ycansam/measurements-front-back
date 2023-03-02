import InputWithLabel from "../Inputs/InputWithLabel/InputWIthLabel";
import FormUserAuthenticationHooks from "./hooks/FormUserAuthentication.hooks";
import FormUserAuthenticationService from "./services/FormUserAuthentication.service";

interface FormUserAuthenticationProps {
    authenticationType: "register" | "login";
}
const FormUserAuthentication: React.FC<FormUserAuthenticationProps> = ({ authenticationType }) => {

    const { state, handleChange } = FormUserAuthenticationHooks();
    const { handleSubmit } = FormUserAuthenticationService({ state, authenticationType });

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel label="Usuario" name="username" type="text" onChange={handleChange} value={state.username} />
            <InputWithLabel label="Contraseña" name="password" type="password" onChange={handleChange} value={state.password} />
            {authenticationType === "login" && <button type="submit">Login</button>}
            {authenticationType === "register" && <button type="submit">Register</button>}
        </form>
    )
}
export default FormUserAuthentication;