import router from './service-router';
import WineMeasure from '../models/wineMeasurements/wineMeasure.model';

class WineMeasurementsService {

    getAll() {
        return router.get(`/measurements`);
    }

    add(data: WineMeasure) {
        return router.post(`/measurements`, data);
    }

}

const wineMeasurementsService = new WineMeasurementsService();
export default wineMeasurementsService;