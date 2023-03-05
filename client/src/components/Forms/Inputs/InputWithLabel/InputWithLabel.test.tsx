/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputWIthLabel from './InputWIthLabel';
describe('InputWithLabel', () => {
    it('deberia Renderizar con las propiedades', () => {
        const label = 'Name';
        const name = 'name';
        const value = 'asdasd';
        const type = 'text';
        const onChange = jest.fn();
        const required = false;

        render(
            <InputWIthLabel label={label} name={name} value={value} type={type} onChange={onChange} required={required} />
        );
        const input = document.querySelector('#ILname') as HTMLInputElement;

        expect(input).toHaveAttribute('name', name);
        expect(input).toHaveAttribute('value', value);
        expect(input).toHaveAttribute('name', name);
        expect(input).toHaveAttribute('type', type);

        input.value = 'Nuevo nombre';
        fireEvent.blur(input);

        expect(input.value).toBe('Nuevo nombre');
    });
});