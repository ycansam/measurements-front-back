
export default class UsersQueries {
    public static ADD = (username: string, password: string) => "INSERT INTO users (username ,password) VALUES ('" + username + "','" + password + "')"
    public static GET_BY_USERNAME = (username: string) => "SELECT * FROM users WHERE username = " + username;
}