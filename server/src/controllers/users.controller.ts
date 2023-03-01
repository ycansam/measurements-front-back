import { Response, Request, NextFunction } from "express";

class UsersController {
    public login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { username, password } = req.body;
    }

    public register = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { username, password } = req.body;

    }

}

const usersController: UsersController = new UsersController();
export default usersController;