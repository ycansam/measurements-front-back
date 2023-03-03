import usersService from "../../../../services/users.service";
import { useNavigate } from "react-router";
import userJWTCache from "../../../../services/cache/userJWT.cache";
import PagePaths from "../../../../page-paths";
import FormUserAuthenticationServiceProps from "../models/FormUserAuthenticationServiceProps.model";
import FormUserAuthenticationServiceReturn from "../models/FormUserAuthenticationServiceReturn";
const FormUserAuthenticationService = ({ state, authenticationType }: FormUserAuthenticationServiceProps): FormUserAuthenticationServiceReturn => {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (authenticationType === 'login') return submitLogin();
        if (authenticationType === 'register') return submitRegister();
    }

    const submitLogin = () => {
        usersService.login(state).then(res => {
            const { token } = res.data.content;
            userJWTCache.saveToken(token);
            navigate(PagePaths.HOME);
        }).catch(err => {
            console.log({ message: err.response.data, err });
        })
    }

    const submitRegister = () => {
        usersService.register(state).then(res => {
            navigate(PagePaths.LOGIN);
        }).catch(err => {
            console.log({ message: err.response.data, err });
        })
    }

    return { handleSubmit }
}
export default FormUserAuthenticationService;