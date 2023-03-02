
import database from "../database";
import WineMeasure from "../models/wineMeasurements.model";
import WineMeasurementsQueries from "../queries/wineMeasurements.queries";
class WineMeasurementsLogic {

    public getAll = async (): Promise<WineMeasure[]> => {
        const result = await database.createQuery(WineMeasurementsQueries.GET_ALL()) as WineMeasure[];
        if (result) return Promise.resolve(result);
        return Promise.reject(result);
    }

    public add = async (measure: WineMeasure): Promise<any> => {
        const result = await database.createQuery(WineMeasurementsQueries.ADD({ ...measure }))
        if (result.insertId) return Promise.resolve(result);
        return Promise.reject(result);
    }

}

const wineMeasurementsLogic: WineMeasurementsLogic = new WineMeasurementsLogic();
export default wineMeasurementsLogic;