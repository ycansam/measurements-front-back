import TrMeasurementProps from './models/TrMeasurementProps.model';
import React from 'react';
const TrMeasurement: React.FC<TrMeasurementProps> = ({ measure: { year, variety, type, color, temperature, graduation, hydrogen_potencial, observations } }) => {

    return <tr data-testid="measurement-row">
        <td>{year}</td>
        <td>{variety}</td>
        <td>{type}</td>
        <td>{color}</td>
        <td>{temperature}</td>
        <td>{graduation}</td>
        <td>{hydrogen_potencial}</td>
        <td>{observations}</td>
    </tr>
}
export default TrMeasurement;