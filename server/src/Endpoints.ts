export default class Endpoints {
    static readonly version = "/v1";
    static readonly DEFAULT_PATH = this.version + "/winespage";

    static readonly USERS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/users",
        REGISTER: "/registry",
        LOGIN: "/login"
    };

    static readonly WINE_MEASUREMENTS = {
        DEFAULT_PATH: this.DEFAULT_PATH + "/measurements",
        GET_ALL: "/",
        CREATE: "/",
    };


}