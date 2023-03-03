
import mysql, { Connection } from "promise-mysql";
require('dotenv').config();
interface DatabaseProperties {
    host: string;
    user: string;
    password: string;
    database: string;
}

const DevelopmentDbProps = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wine_measurements',
}

const TestingDbProps = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wine_measurements_testing',
}

class Database {
    public async createQuery(query: string): Promise<any> {
        const conn = await this.connect();
        return await conn.query(query)
            .then(res => {
                this.finishConnection(conn)
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(err))
    }

    private async connect(): Promise<Connection> {
        const nodeEnv = process.env.NODE_ENV;
        if (nodeEnv === "development") return await mysql.createConnection(this.getDevelopmentConfig());
        // Default Testing Connection
        return await mysql.createConnection(this.getTestingConfig());
    }

    private finishConnection(conn: Connection): void {
        conn.end();
    }

    private getDevelopmentConfig(): DatabaseProperties {
        return DevelopmentDbProps;
    }

    private getTestingConfig(): DatabaseProperties {
        return TestingDbProps;
    }

    public async clearDatabase(): Promise<void> {
        const conn = await this.connect();
        this.getTables(conn);
    }
    
    private getTables(conn: Connection): void {
        conn.query("SHOW TABLES", (err: any, tables: any) => {
            if (err) {
                console.error('Error al obtener el nombre de las tablas:', err);
                conn.end();
                return;
            }
            this.deleteTablesFromDatabase(conn, tables);
            conn.end();
        });
    }


    private deleteTablesFromDatabase(conn: Connection, tables: any): void {
        tables.forEach((table: any) => {
            conn.query(`DELETE FROM ${table.Tables_in_wine_measurements_testing}`, (err: any) => {
                if (err) console.error(`Error al borrar los datos de la tabla ${table}:`, err);
            });
        });
    }

}
const database = new Database();
export default database;