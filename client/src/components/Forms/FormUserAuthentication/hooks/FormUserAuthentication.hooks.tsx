import { useState, useCallback } from "react";
import User from "../../../../models/user.model";
import { ChangeEvent } from "react";

interface FormUserAuthenticationHooksReturn {
    state: User;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormUserAuthenticationHooks = (): FormUserAuthenticationHooksReturn => {

    const [state, setState] = useState<User>({
        username: '',
        password: ''
    })

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    }, [setState]);

    return { state, handleChange }
}
export default FormUserAuthenticationHooks;