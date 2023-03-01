const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TIME_TO_EXPIRE = 86400;
const SALT_ROUNDS = 10;
import database from "../database";
import User from "../models/user.model";
import UsersQueries from "../queries/users.queries";

class UsersLogic {

    public register = async ({ username, password }: User): Promise<any> => {

        const hashedPass = await this.hashPassword(password);
        if (hashedPass instanceof Error) return Promise.reject(hashedPass);

        const result = await database.createQuery(UsersQueries.ADD(username, hashedPass as string));
        if (result.insertId) return Promise.resolve(result);
        return Promise.reject(result);
    }

    private async hashPassword(password: string): Promise<string | Error> {
        const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
        if (hashedPass) return hashedPass;
        return new Error('Error on hashing password')
    }


    public login = async ({ username, password }: User) => {

        const token = this.Authenticate({ username, password });

        return token;
    }

    private Authenticate = async ({ username, password }: User) => {

    }



}

const usersLogic: UsersLogic = new UsersLogic();
export default usersLogic;