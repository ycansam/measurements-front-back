/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */

import TableWineMeasurements from './TableWineMeasurements';
import React from 'react';
import { render } from '@testing-library/react';
import WineMeasure from '../../../models/wineMeasurements/wineMeasure.model';
const headers = ["Año", "Variedad", "Tipo", "Color", "Temperatura", "Graduacion", "Potencial De Hidrogeno", "Observaciones"];

const measurements: WineMeasure[] = [
    {
        year: 2020,
        variety: "Cabernet Sauvignon",
        type: "Vino espumoso",
        color: "Rojo",
        temperature: 12,
        graduation: 10,
        hydrogen_potencial: 2,
        observations: "Aromas a frutos rojos"
    },
    {
        year: 2019,
        variety: "Cabernet Sauvignon",
        type: "Vino espumoso",
        color: "Amarillo",
        temperature: 10,
        graduation: 12,
        hydrogen_potencial: 2,
        observations: "Sabor suave con notas a vainilla"
    }
];

describe('TableWineMeasurements', () => {

    it('Deberia renderizar la tabla con measurements', () => {
        const { container } = render(<TableWineMeasurements measurements={measurements} />);
        expect(container.querySelector('table')).toBeInTheDocument();
        expect(container.querySelectorAll('thead tr th')).toHaveLength(headers.length);
        headers.forEach((title, index) => {
            expect(container.querySelectorAll('thead tr th')[index].textContent).toEqual(title);
        });
        expect(container.querySelectorAll('tbody tr')).toHaveLength(measurements.length);
        const rowElements = container.querySelectorAll('tbody tr');

        rowElements.forEach((rowElement, index) => {
            const cells = rowElement.querySelectorAll('td');
            expect(cells[0].textContent).toBe(measurements[index].year.toString());
            expect(cells[1].textContent).toBe(measurements[index].variety);
            expect(cells[2].textContent).toBe(measurements[index].type);
            expect(cells[3].textContent).toBe(measurements[index].color);
            expect(cells[4].textContent).toBe(measurements[index].temperature.toString());
            expect(cells[5].textContent).toBe(measurements[index].graduation.toString());
            expect(cells[6].textContent).toBe(measurements[index].hydrogen_potencial.toString());
            expect(cells[7].textContent).toBe(measurements[index].observations);
        });
    });

    it('Deberia renderizar el componente con measurements modificados', () => {
        const { container, rerender } = render(<TableWineMeasurements measurements={measurements} />);
        expect(container.querySelectorAll('tbody tr')).toHaveLength(measurements.length);
        const newMeasurements = [...measurements];
        newMeasurements.pop(); // Eliminamos un elemento del array original
        rerender(<TableWineMeasurements measurements={newMeasurements} />); // Actualizamos las props del componente
        expect(container.querySelectorAll('tbody tr')).toHaveLength(newMeasurements.length);
        const rowElements = container.querySelectorAll('tbody tr');

        rowElements.forEach((rowElement, index) => {
            const cells = rowElement.querySelectorAll('td');
            expect(cells[0].textContent).toBe(measurements[index].year.toString());
            expect(cells[1].textContent).toBe(measurements[index].variety);
            expect(cells[2].textContent).toBe(measurements[index].type);
            expect(cells[3].textContent).toBe(measurements[index].color);
            expect(cells[4].textContent).toBe(measurements[index].temperature.toString());
            expect(cells[5].textContent).toBe(measurements[index].graduation.toString());
            expect(cells[6].textContent).toBe(measurements[index].hydrogen_potencial.toString());
            expect(cells[7].textContent).toBe(measurements[index].observations);
        });
    });

});

export { }