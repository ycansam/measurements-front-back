import User from "../../../../models/user.model";
export default interface FormUserAuthenticationServiceProps {
    state: User
    authenticationType: "register" | "login";
}
