import { Response, Request, NextFunction } from "express";
import usersLogic from "../logics/users.logic";
import User from "../models/user.model";
class UsersController {
    public login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { username, password } = req.body as User;
    }

    public register = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { username, password } = req.body as User;

        await usersLogic.register({ username, password }).then(result => {
            return res.status(200).json({ content: result, message: "User registred" });
        }).catch(err => {
            return res.status(400).json(err);
        })

    }

}

const usersController: UsersController = new UsersController();
export default usersController;