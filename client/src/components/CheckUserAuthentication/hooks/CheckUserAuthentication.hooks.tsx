import { useEffect } from "react";
import { useJwt } from "react-jwt";
import { useLocation } from "react-router";
import CheckUserAuthenticationServices from "../services/CheckUserAuthentication.service";
import PagePaths from "../../../page-paths";
import userJWTCache from "../../../services/cache/userJWT.cache";
import CheckUserAuthenticationServicesReturn from "../models/CheckUserAuthenticationServicesReturn.model";
import CheckUserAuthenticationHooksReturn from "../models/CheckUserAuthenticationHooksReturn.model";

const CheckUserAuthenticationHooks = (): CheckUserAuthenticationHooksReturn => {

    const pathname = useLocation().pathname;
    const { isExpired } = useJwt(userJWTCache.getToken());
    const { checkUserOnValidPath } = CheckUserAuthenticationServices() as CheckUserAuthenticationServicesReturn;
    useEffect(() => {
        checkUserOnValidPath();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return { isNotAuthenticated: isExpired && pathname.includes(PagePaths.HOME) }
}
export default CheckUserAuthenticationHooks;