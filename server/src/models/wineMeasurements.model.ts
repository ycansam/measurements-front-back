interface WineMeasure {
    id?: number;
    year: number;
    variety: Enumerator;
    type: Enumerator;
    color: string;
    temperature: number;
    graduation: number;
    hydrogen_potencial: number;
    observations?: string;
}
export default WineMeasure;
