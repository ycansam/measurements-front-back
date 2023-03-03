import { ChangeEvent } from "react";
import WineMeasure from "../../../../models/wineMeasurements/wineMeasure.model";
export default interface FormUserAuthenticationHooksReturn {
    state: WineMeasure;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeSelector: React.ChangeEventHandler<HTMLSelectElement>;
}
