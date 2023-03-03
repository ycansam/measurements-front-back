import router from './service-router';
import WineMeasure from '../models/wineMeasurements/wineMeasure.model';
import routerHeaders from './router-headers';
class WineMeasurementsService {

    getAll() {
        console.log(routerHeaders.setHeaders())
        return router.get(`/measurements`, routerHeaders.setHeaders());
    }

    add(data: WineMeasure) {
        return router.post(`/measurements`, data, routerHeaders.setHeaders());
    }

}

const wineMeasurementsService = new WineMeasurementsService();
export default wineMeasurementsService;