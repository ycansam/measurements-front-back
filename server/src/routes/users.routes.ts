import Endpoints from "../Endpoints";
import AppRouter from "../router";

class UsersRouter extends AppRouter {
    constructor() {
        super();
        this.register();
        this.login();
    }

    private register = () => this.router.post(Endpoints.USERS.REGISTER);

    private login = () => this.router.post(Endpoints.USERS.LOGIN);
}

const usersRouter: UsersRouter = new UsersRouter();
export default usersRouter.router;