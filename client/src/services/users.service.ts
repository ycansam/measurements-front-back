import router from './service-router';
import User from '../models/user.model';

class UsersService {

    login(data: User) {
        return router.post(`/login`, data);
    }

    register(data: User) {
        return router.post(`/registry`, data);
    }

}

const usersService = new UsersService();
export default usersService;