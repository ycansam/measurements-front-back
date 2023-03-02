interface WineMeasure {
    id?: number;
    year: number;
    variety: string;
    type: string;
    color: string;
    temperature: number;
    graduation: number;
    hydrogen_potencial: number;
    observations?: string;
}
export default WineMeasure;
