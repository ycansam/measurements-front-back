import FormWineMeasurementsServiceProps from "../models/FormWineMeasurementsServiceProps";
import FormWineMeasurementsServiceReturn from "../models/FormWineMeasurementsServiceReturn";
import wineMeasurementsService from "../../../../services/wine-measurements.service";
import HomeContext from "../../../../pages/Home/contexts/Home.context";
import HomeContextModel from "../../../../pages/Home/models/HomeContext.model";
import { useContext } from "react";
const FormWineMeasurementsService = ({ state }: FormWineMeasurementsServiceProps): FormWineMeasurementsServiceReturn => {
    const { fetchMeasurements } = useContext(HomeContext) as HomeContextModel;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return submitWineMeasurement();
    }

    const submitWineMeasurement = () => {
        wineMeasurementsService.add(state).then(res => {
            fetchMeasurements();
        }).catch(err => {
            console.error(err);
        })
    }
   
    return { handleSubmit }
}
export default FormWineMeasurementsService;