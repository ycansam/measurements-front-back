
const SOTRAGE_TOKEN_IDENTIFIER = "user-token-key";

class UserJWTCache {

    public saveToken(token: string): void {
        localStorage.setItem(SOTRAGE_TOKEN_IDENTIFIER, token);
    }

    public getToken(): string {
        return localStorage.getItem(SOTRAGE_TOKEN_IDENTIFIER) as string;
    }

}

const userJWTCache = new UserJWTCache();
export default userJWTCache;