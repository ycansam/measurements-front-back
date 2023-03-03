import { useState, useCallback } from "react";
import FormWineMeasurementsHooksReturn from "../models/FormWineMeasurementsHooksReturn";
import WineMeasure from "../../../../models/wineMeasurements/wineMeasure.model";
const FormWineMeasurementsHooks = (): FormWineMeasurementsHooksReturn => {

    const [state, setState] = useState<WineMeasure>({
        year: 0,
        variety: "Cabernet Sauvignon",
        type: "Vino blanco",
        color: "",
        temperature: 0,
        graduation: 0,
        hydrogen_potencial: 0,
        observations: ""
    })

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    }, [setState]);

    const handleChangeSelector: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setState((prevState) => ({ ...prevState, [name]: value }));
        // Handle the change event here
    };


    return { state, handleChange, handleChangeSelector }
}
export default FormWineMeasurementsHooks;