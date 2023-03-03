import express, { Application, urlencoded } from 'express';
import Endpoints from './Endpoints';
import wineMeasurementsRoutes from './routes/wineMeasurements.routes';
import usersRoutes from './routes/users.routes';
import userAuthenticationMiddleware from './middlewares/userAuthentication.middleware';
const cors = require('cors');

class Server {
    private app: Application;
    private connection: any;
    private readonly port: number = 3001;
    private readonly corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
    }

    constructor() {
        this.app = express();
        this.configure();
        this.setRoutes();
        this.startServer();
    }

    private configure(): void {
        this.app.use(express.json());
        this.app.use(cors(this.corsOptions));
        this.app.use(urlencoded({ extended: false }))

    }

    private setRoutes(): void {
        this.app.use(Endpoints.USERS.DEFAULT_PATH, usersRoutes);
        this.app.use(Endpoints.WINE_MEASUREMENTS.DEFAULT_PATH, userAuthenticationMiddleware.verifyToken, wineMeasurementsRoutes,);
    }


    private startServer(): void {
        this.connection = this.app.listen(this.port, () => {
            if (process.env.NODE_ENV === "development")
                console.log(`Server listening on port ${this.port}`);
        });
    }

    public getApp(): Application {
        return this.app;
    }
    public closeServer(done: any): void {
        this.connection.close();
        done();
    }
}

const server = new Server();
export default server;