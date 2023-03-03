
const TIME_TO_EXPIRE = 86400;
const jwt = require('jsonwebtoken');
import User from "../models/user.model";
const PRIVATE_JWT = "wine-measures-private" // must be on .env

export default class UserJWTService {
    public static signUserToken(user: User) {
        return jwt.sign({ id: user.id, username: user.username }, PRIVATE_JWT, { expiresIn: TIME_TO_EXPIRE });
    }

    public static verifyToken(token: string) {
        return jwt.verify(token, PRIVATE_JWT);
    }

}