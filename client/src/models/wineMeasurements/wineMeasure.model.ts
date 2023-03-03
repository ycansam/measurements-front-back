interface WineMeasure {
    id?: number;
    year: number;
    variety: 'Cabernet Sauvignon' | 'Chardonnay' | 'Pinot Noir' | 'Merlot' | 'Syrah';
    type: 'Vino tinto' | 'Vino blanco' | 'Vino rosado' | 'Vino espumoso' | 'Vino fortificado';
    color: string;
    temperature: number;
    graduation: number;
    hydrogen_potencial: number; // puede estar entre  0 y 14 incluyendose
    observations?: string;
}
export default WineMeasure;
