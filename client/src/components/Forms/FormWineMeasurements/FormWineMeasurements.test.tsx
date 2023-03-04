/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */

import FormWineMeasurements from './FormWineMeasurements';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('FormUserAuthentication', () => {

    it('renders correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FormWineMeasurements />
            </BrowserRouter>
        );
        const form = document.querySelector('.containerForm') as HTMLElement;
        expect(form).toBeInTheDocument();
        expect(getByText('Registrar Medición')).toBeInTheDocument();
        expect(getByText('Año')).toBeInTheDocument();
        expect(getByText('Variedad')).toBeInTheDocument();
        expect(getByText('Tipo')).toBeInTheDocument();
        expect(getByText('Color')).toBeInTheDocument();
        expect(getByText('Temperatura')).toBeInTheDocument();
        expect(getByText('Graduacion')).toBeInTheDocument();
        expect(getByText('Potencial de Hidrogeno')).toBeInTheDocument();
        expect(getByText('Observaciones')).toBeInTheDocument();
    });
});

export { }