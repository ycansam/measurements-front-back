import { Request, Response, NextFunction } from 'express';
import UserJWTService from '../services/userJWT.service';
class UserAuthenticationMiddleware {

    public verifyToken(req: Request, res: Response, next: NextFunction) {
        const token = req.headers["x-access-token"] as string;
        if (!token) return res.status(401).json({ message: "There is no token!" });

        const verified = UserJWTService.verifyToken(token);

        try {
            if (verified.message.JsonWebTokenError) return res.status(401).json({ message: "Token not verified!" });
        } catch (err) {
            console.error(err);
        }
        next();

    }
}
const userAuthenticationMiddleware = new UserAuthenticationMiddleware();
export default userAuthenticationMiddleware;