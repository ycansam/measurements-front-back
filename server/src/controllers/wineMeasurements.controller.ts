import { Response, Request, NextFunction } from "express";
import wineMeasurementsLogic from "../logics/wineMeasurements.logic";
import WineMeasure from "../models/wineMeasurements.model";
class WineMeasurementsController {

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        wineMeasurementsLogic.getAll().then(result => {
            return res.status(200).json({ content: result, message: "Measures Obtained" })
        }).catch(err => {
            return res.status(400).json(err);
        })
    }

    public add = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

        const { year, variety, type, color, temperature, graduation, hydrogen_potencial, observations } = req.body as WineMeasure;

        if (year < 0) return res.status(400).json({ message: "Year must not be negative!" });
        if (color && color.length < 1) return res.status(400).json({ message: "color must have any!" });

        wineMeasurementsLogic.add({ year, variety, type, color, temperature, graduation, hydrogen_potencial, observations }).then(result => {
            return res.status(200).json({ content: result, message: "Measure Added Correctly" })
        }).catch(err => {
            return res.status(400).json(err);
        })
    }
}

const wineMeasurementsController: WineMeasurementsController = new WineMeasurementsController();
export default wineMeasurementsController;