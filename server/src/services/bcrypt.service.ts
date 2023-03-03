const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

export default class BcryptService {
    public static async comparePasswords(userPassword: string, password: string): Promise<boolean> {
        return await bcrypt.compare(password, userPassword);
    }

    public static async hashPassword(password: string): Promise<string | boolean> {
        const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
        if (hashedPass) return hashedPass;
        return false
    }
}
