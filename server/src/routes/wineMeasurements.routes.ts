import Endpoints from "../Endpoints";
import AppRouter from "../router";

class WineMeasurementsRouter extends AppRouter {
    constructor() {
        super();
        this.getAll();
        this.add();
    }

    private getAll = () => this.router.get(Endpoints.WINE_MEASUREMENTS.GET_ALL)
    private add = () => this.router.post(Endpoints.WINE_MEASUREMENTS.CREATE)
}

const restUserRouter: WineMeasurementsRouter = new WineMeasurementsRouter();
export default restUserRouter.router