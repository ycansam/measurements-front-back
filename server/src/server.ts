require('dotenv').config();
import express, { Application, urlencoded } from 'express';
import Endpoints from './Endpoints';
const cors = require('cors');


class Server {
    private app: Application;
    private readonly port: number = 3001;
    private readonly corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
    }

    constructor() {
        this.app = express();
        this.configure();
        this.connectDatabase();
        this.setRoutes();
        this.startServer();
    }

    private configure(): void {
        this.app.use(express.json());
        this.app.use(cors(this.corsOptions));
        this.app.use(urlencoded({ extended: false }))

    }

    private connectDatabase(): void {
        Database.connect();
    }

    private setRoutes(): void {
    }


    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

const server = new Server();