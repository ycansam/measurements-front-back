import InputWithLabel from "../Inputs/InputWithLabel/InputWIthLabel";
import FormUserAuthenticationHooks from "./hooks/FormUserAuthentication.hooks";
import FormUserAuthenticationService from "./services/FormUserAuthentication.service";
import styles from '../../../styles/forms.module.css';
import FormUserAuthenticationProps from "./models/FormUserAuthenticationProps.model";
import FormUserAuthenticationHooksReturn from "./models/FormUserAuthenticationHooksReturn";
import FormUserAuthenticationServiceReturn from "./models/FormUserAuthenticationServiceReturn";
const textVariables = {
    login: {
        h1: 'Inicio de Sesión',
        btnSubmit: 'Iniciar Sesión'
    },
    register: {
        h1: 'Registro',
        btnSubmit: 'Registrarse'
    }
}

const FormUserAuthentication: React.FC<FormUserAuthenticationProps> = ({ authenticationType }) => {

    const { state, handleChange } = FormUserAuthenticationHooks() as FormUserAuthenticationHooksReturn;
    const { handleSubmit } = FormUserAuthenticationService({ state, authenticationType }) as FormUserAuthenticationServiceReturn;

    return (
        <form onSubmit={handleSubmit} className={styles.containerForm}>
            <h1>{textVariables[authenticationType].h1}</h1>
            <InputWithLabel label="Usuario" name="username" type="text" onChange={handleChange} value={state.username} />
            <InputWithLabel label="Contraseña" name="password" type="password" onChange={handleChange} value={state.password} />
            <button type="submit" className={styles.btnSubmit}>{textVariables[authenticationType].btnSubmit}</button>
        </form>
    )
}
export default FormUserAuthentication;