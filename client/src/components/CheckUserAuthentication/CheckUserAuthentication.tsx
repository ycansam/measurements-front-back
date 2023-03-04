import { Navigate } from "react-router";
import PagePaths from "../../page-paths";
import CheckUserAuthenticationHooks from "./hooks/CheckUserAuthentication.hooks";
import CheckUserAuthenticationHooksReturn from "./models/CheckUserAuthenticationHooksReturn.model";
import React from "react";
const CheckUserAuthentication: React.FC = () => {

    const { isNotAuthenticated } = CheckUserAuthenticationHooks() as CheckUserAuthenticationHooksReturn;

    if (isNotAuthenticated) return <Navigate to={PagePaths.LOGIN} replace={true}></Navigate>
    return <></>
}
export default CheckUserAuthentication;