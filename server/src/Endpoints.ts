export default class Endpoints {
    static readonly DEFAULT_PATH = "/";

    static readonly USERS = {
        DEFAULT_PATH: this.DEFAULT_PATH,
        REGISTER: "/registry",
        LOGIN: "/login"
    };

    static readonly WINE_MEASUREMENTS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "measurements",
        GET_ALL: "/",
        CREATE: "/",
    };


}