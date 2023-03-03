import WineMeasure from "../../../models/wineMeasurements/wineMeasure.model";

export default interface HomeHooksReturn {
    wineMeasurements: WineMeasure[]
    setWineMeasurements: React.Dispatch<React.SetStateAction<WineMeasure[]>>
    fetchMeasurements: () => void;
}