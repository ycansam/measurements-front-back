import TableWineMeasurementsProps from './models/TableWineMeasurementsProps.model'
import TrMeasurement from './components/TrMeasurement/TrMeasurement'

const headers = ["Año", "Variedad", "Tipo", "Color", "Temperatura", "Graduacion", "Potencial De Hidrogeno", "Observaciones"]

const TableWIneMeasurements: React.FC<TableWineMeasurementsProps> = ({ measurements }) => {

    return <table >
        <thead>
            <tr>
                {headers.map(title => <th>{title}</th>)}
            </tr>
        </thead>
        <tbody>
            {measurements.map((measure, index) => {
                return <TrMeasurement key={index} measure={{ ...measure }} />
            })}
        </tbody>
    </table>
}
export default TableWIneMeasurements;