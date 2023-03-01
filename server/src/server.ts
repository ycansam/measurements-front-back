import express, { Application, urlencoded } from 'express';
import Endpoints from './Endpoints';
import wineMeasurementsRoutes from './routes/wineMeasurements.routes';
import usersRoutes from './routes/users.routes';
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
        this.app.use(Endpoints.WINE_MEASUREMENTS.DEFAULT_PATH, wineMeasurementsRoutes);
    }


    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

const server = new Server();