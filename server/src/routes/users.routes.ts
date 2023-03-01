import Endpoints from "../Endpoints";
import usersController from "../controllers/users.controller";
import AppRouter from "../router";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.register();
        this.login();
    }

    private register = () => this.router.post(Endpoints.USERS.REGISTER, usersController.register);

    private login = () => this.router.post(Endpoints.USERS.LOGIN, usersController.login);
}

const usersRouter: UsersRouter = new UsersRouter();
export default usersRouter.router;