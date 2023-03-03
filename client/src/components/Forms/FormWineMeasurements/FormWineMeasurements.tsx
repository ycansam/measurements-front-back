import InputWithLabel from "../Inputs/InputWithLabel/InputWIthLabel";
import InputWithLabelValueSelector from "../Inputs/InputWIthLabelValueSelector/InputWithLabelValueSelector";
import styles from '../../../styles/forms.module.css';
import FormWineMeasurementsHooks from "./hooks/FormWineMeasurements.hooks";
import FormWineMeasurementsHooksReturn from "./models/FormWineMeasurementsHooksReturn";
import FormWineMeasurementsService from "./services/FormWineMeasurements.service";
import FormWineMeasurementsServiceReturn from "./models/FormWineMeasurementsServiceReturn";
import WineMeasureClass from "../../../models/wineMeasurements/wineMeasure.class";

const textVariables = {
    h1: 'Registrar Medición',
    btnSubmit: 'Enviar'
}
const FormWineMeasurements: React.FC = () => {

    const { state, handleChange, handleChangeSelector } = FormWineMeasurementsHooks() as FormWineMeasurementsHooksReturn;
    const { handleSubmit } = FormWineMeasurementsService({ state }) as FormWineMeasurementsServiceReturn;

    return (
        <form onSubmit={handleSubmit} className={styles.containerForm}>
            <h1>{textVariables.h1}</h1>
            <InputWithLabel label="Año" name="year" type="number" onChange={handleChange} value={state.year.toString()} required={true} />
            <InputWithLabelValueSelector label="Variedad" name="variety" onChange={handleChangeSelector} value={state.variety} options={WineMeasureClass.VARIETIES} required={true} />
            <InputWithLabelValueSelector label="Tipo" name="type" onChange={handleChangeSelector} value={state.type} options={WineMeasureClass.TYPES} required={true} />
            <InputWithLabel label="Color" name="color" type="text" onChange={handleChange} value={state.color} required={true} />
            <InputWithLabel label="Temperatura" name="temperature" type="number" onChange={handleChange} value={state.temperature.toString()} required={true} />
            <InputWithLabel label="Graduacion" name="graduation" type="number" onChange={handleChange} value={state.graduation.toString()} required={true} />
            <InputWithLabel label="Potencial de Hidrogeno" name="hydrogen_potencial" type="number" onChange={handleChange} value={state.hydrogen_potencial.toString()} required={true} />
            <InputWithLabel label="Observaciones" name="observations" type="text" onChange={handleChange} value={state.observations as string} />
            <button type="submit" className={styles.btnSubmit}>{textVariables.btnSubmit}</button>
        </form>
    )
}
export default FormWineMeasurements;