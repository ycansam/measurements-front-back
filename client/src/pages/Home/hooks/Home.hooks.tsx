import { useEffect, useState } from "react";
import wineMeasurementsService from "../../../services/wine-measurements.service";
import WineMeasure from "../../../models/wineMeasurements/wineMeasure.model";
import HomeHooksReturn from "../models/HomeHooksReturn";


const HomeHooks = (): HomeHooksReturn => {

    const [wineMeasurements, setWineMeasurements] = useState<WineMeasure[]>([])

    useEffect(() => {
        fetchMeasurements();
    }, [])

    const fetchMeasurements = () => {
        wineMeasurementsService.getAll().then(res => {
            const { content } = res.data;
            setWineMeasurements(content);
            console.log(res.data.content);
        }).catch(err => {
            console.error(err);
        })
    }

    return { wineMeasurements, setWineMeasurements, fetchMeasurements }
}

export default HomeHooks;