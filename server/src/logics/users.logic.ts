import userAuthenticationMiddleware from "../middlewares/userAuthentication.middleware";
import database from "../database";
import User from "../models/user.model";
import UsersQueries from "../queries/users.queries";
import BcryptService from "../services/bcrypt.service";
import UserJWTService from "../services/userJWT.service";

class UsersLogic {

    public register = async ({ username, password }: User): Promise<object | boolean> => {

        if (!username) return Promise.reject("Username required");
        if (password.length < 4) return Promise.reject("Password needs a minimum length of 4");

        const hashedPass = await BcryptService.hashPassword(password);
        if (!hashedPass) return Promise.reject("Error on hashing password");

        const result = await database.createQuery(UsersQueries.ADD(username, hashedPass as string));
        if (result.insertId) return Promise.resolve(result);
        return Promise.reject(result);
    }

    public login = async ({ username, password }: User): Promise<string | boolean> => {

        const user = await this.findUserByUsername(username) as User;
        if (!user) return Promise.reject('Invalid Username or Password');

        const token = await this.Authenticate(user, password);
        if (!token) return Promise.reject('Invalid Username or Password');

        return Promise.resolve(token);
    }

    private Authenticate = async (user: User, password: string): Promise<boolean | string> => {
        const isMatch = await BcryptService.comparePasswords(user.password, password);
        if (!isMatch) return isMatch;

        return this.generateToken(user);
    }

    private generateToken(user: User): string {
        return UserJWTService.signUserToken(user);
    }

    private findUserByUsername = async (username: string): Promise<User | boolean> => {
        const foundUser = await database.createQuery(UsersQueries.GET_BY_USERNAME(username));
        if (foundUser.length > 0) return foundUser[0] as User;
        return false;
    }

}

const usersLogic: UsersLogic = new UsersLogic();
export default usersLogic;