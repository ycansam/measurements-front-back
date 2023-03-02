import { ChangeEvent } from "react";
import User from "../../../../models/user.model";
export default interface FormUserAuthenticationHooksReturn {
    state: User;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
