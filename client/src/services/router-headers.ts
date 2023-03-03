import { AxiosRequestConfig } from 'axios';
import userJWTCache from './cache/userJWT.cache'
class RouterHeaders {

    setHeaders() {
        const token = userJWTCache.getToken();
        return { headers: { 'x-access-token': token } } as AxiosRequestConfig;
    }
}
const routerHeaders = new RouterHeaders();
export default routerHeaders;