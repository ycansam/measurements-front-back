import TableWineMeasurementsProps from './models/TableWineMeasurementsProps.model'
import TrMeasurement from './components/TrMeasurement/TrMeasurement'
import React from 'react'
import styles from './TableWineMeasurements.module.css'
const headers = ["Año", "Variedad", "Tipo", "Color", "Temperatura", "Graduacion", "Potencial De Hidrogeno", "Observaciones"]

const TableWIneMeasurements: React.FC<TableWineMeasurementsProps> = ({ measurements }) => {

    return <table className={styles.mainTable} >
        <thead>
            <tr>
                {headers.map((title, index) => <th key={index}>{title}</th>)}
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