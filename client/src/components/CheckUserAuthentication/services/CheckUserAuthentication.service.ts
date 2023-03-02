import { useLocation, useNavigate } from "react-router";
import PagePaths from "../../../page-paths";
import CheckUserAuthenticationServicesReturn from '../models/CheckUserAuthenticationServicesReturn.model'
const CheckUserAuthenticationServices = (): CheckUserAuthenticationServicesReturn => {

    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const checkUserOnValidPath = (): void => {
        if (!isUserOnValidPath()) return navigate(PagePaths.LOGIN);
    }

    const isUserOnValidPath = (): boolean => {
        for (const [key, validPath] of Object.entries(PagePaths)) {
            if (pathname.includes(validPath)) return true;
        }
        return false;
    }

    return { checkUserOnValidPath }
}
export default CheckUserAuthenticationServices;