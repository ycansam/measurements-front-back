import usersService from "../../../../services/podcasts.service";
import User from "../../../../models/user.model";
interface FormUserAuthenticationServiceProps {
    state: User
    authenticationType: "register" | "login";
}

interface FormUserAuthenticationServiceReturn {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormUserAuthenticationService = ({ state, authenticationType }: FormUserAuthenticationServiceProps): FormUserAuthenticationServiceReturn => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (authenticationType === 'login') return submitLogin();
        if (authenticationType === 'register') return submitRegister();
    }

    const submitLogin = () => {
        usersService.login(state).then(res => {
            console.log(res);
        }).catch(err => {
            console.log({ message: err.response.data, err });
        })
    }

    const submitRegister = () => {
        usersService.register(state).then(res => {
            console.log(res);
        }).catch(err => {
            console.log({ message: err.response.data, err });
        })
    }

    return { handleSubmit }
}
export default FormUserAuthenticationService;