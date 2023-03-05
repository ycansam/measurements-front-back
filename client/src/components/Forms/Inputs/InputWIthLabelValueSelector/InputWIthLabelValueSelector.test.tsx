/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputWithLabelValueSelector from './InputWithLabelValueSelector';
import userEvent from '@testing-library/user-event';

describe('InputWithLabelValueSelector', () => {
    const label = 'Color';
    const name = 'color';
    const value = 'red';
    const options = ['red', 'green', 'blue'];
    const onChange = jest.fn();
    const required = false;

    beforeEach(() => {
        onChange.mockClear();
    });

    it('Renderiza el componente correctamente', () => {
        render(
            <InputWithLabelValueSelector
                label={label}
                name={name}
                value={value}
                options={options}
                onChange={onChange}
                required={required}
            />
        );

        const select = screen.getByRole('combobox');

        expect(select).toBeInTheDocument();

        options.forEach((option) => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it('actualiza el componente', () => {
        render(
            <InputWithLabelValueSelector
                label={label}
                name={name}
                value={value}
                options={options}
                onChange={onChange}
                required={required}
            />
        );

        const select = screen.getByRole('combobox') as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'green' } });
        userEvent.selectOptions(select, 'green');

        expect(onChange).toBeCalledTimes(2);
        expect(onChange).toHaveBeenCalledWith(expect.any(Object)); // check that onChange is called with an object
    });
});