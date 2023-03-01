import { Response, Request, NextFunction } from "express";

class WineMeasurementsController {

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    }

    public add = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        const { year, variety, type, color, temperature, graduation, hydrogen_potencial, observations } = req.body;


    }
}

const wineMeasurementsController: WineMeasurementsController = new WineMeasurementsController();
export default wineMeasurementsController;