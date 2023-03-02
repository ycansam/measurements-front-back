const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TIME_TO_EXPIRE = 86400;
const SALT_ROUNDS = 10;
const PRIVATE_JWT = "wine-measures-private" // must be on .env

import database from "../database";
import User from "../models/user.model";
import UsersQueries from "../queries/users.queries";

class UsersLogic {

    public register = async ({ username, password }: User): Promise<object | boolean> => {

        const hashedPass = await this.hashPassword(password);
        if (!hashedPass) return Promise.reject("Error on hashing password");

        const result = await database.createQuery(UsersQueries.ADD(username, hashedPass as string));
        if (result.insertId) return Promise.resolve(result);
        return Promise.reject(result);
    }

    private async hashPassword(password: string): Promise<string | boolean> {
        const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
        if (hashedPass) return hashedPass;
        return false
    }


    public login = async ({ username, password }: User): Promise<string | boolean> => {

        const user = await this.findUserByUsername(username) as User;
        if (!user) return Promise.reject('Invalid Username or Password');

        const token = await this.Authenticate(user, password);
        if (!token) return Promise.reject('Invalid Username or Password');

        return Promise.resolve(token);
    }

    private Authenticate = async (user: User, password: string): Promise<boolean | string> => {
        const isMatch = await this.comparePasswords(user, password);
        if (!isMatch) return isMatch;

        return this.generateToken(user);
    }

    private async comparePasswords(user: User, password: string): Promise<boolean> {
        return await bcrypt.compare(password, user.password);
    }

    private generateToken(user: User): string {
        return jwt.sign({ id: user.id, username: user.username }, PRIVATE_JWT, { expiresIn: TIME_TO_EXPIRE });
    }

    private findUserByUsername = async (username: string): Promise<User | boolean> => {
        const foundUser = await database.createQuery(UsersQueries.GET_BY_USERNAME(username));
        if (foundUser.length > 0) return foundUser[0] as User;
        return false;
    }



}

const usersLogic: UsersLogic = new UsersLogic();
export default usersLogic;