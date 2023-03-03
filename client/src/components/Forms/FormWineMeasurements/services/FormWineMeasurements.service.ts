import FormWineMeasurementsServiceProps from "../models/FormWineMeasurementsServiceProps";
import FormWineMeasurementsServiceReturn from "../models/FormWineMeasurementsServiceReturn";
import wineMeasurementsService from "../../../../services/wine-measurements.service";
const FormWineMeasurementsService = ({ state }: FormWineMeasurementsServiceProps): FormWineMeasurementsServiceReturn => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return submitWineMeasurement();
    }

    const submitWineMeasurement = () => {
        wineMeasurementsService.add(state).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }
    return { handleSubmit }
}
export default FormWineMeasurementsService;