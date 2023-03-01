
import mysql, { Connection } from "promise-mysql";

interface DatabaseProperties {
    host: string;
    user: string;
    password: string;
    database: string;
}

class Database {

    private host: string = '127.0.0.1';
    private user: string = 'root';
    private password: string = 'root';
    private database: string = 'wine_measurements';


    public async createQuery(query: string): Promise<void> {
        const conn = await this.connect();
        return await conn.query(query)
            .then(res => {
                this.finishConnection(conn)
                return Promise.resolve(res);
            })
            .catch(err => new Error(err))
    }

    private async connect(): Promise<Connection> {
        return await mysql.createConnection(this.getProperties());
    }
    
    private finishConnection(conn: Connection): void {
        conn.end();
    }

    private getProperties(): DatabaseProperties {
        return {
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        }
    }

}
const database = new Database();
export default database;