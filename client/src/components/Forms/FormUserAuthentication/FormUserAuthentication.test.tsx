/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */

import FormUserAuthentication from './FormUserAuthentication';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('FormUserAuthentication', () => {

  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <FormUserAuthentication authenticationType="login" />
      </BrowserRouter>
    );
    const form = document.querySelector('.containerForm') as HTMLElement;
    expect(form).toBeInTheDocument();
    expect(getByText('Inicio de Sesión')).toBeInTheDocument();
    expect(getByText('Usuario')).toBeInTheDocument();
    expect(getByText('Contraseña')).toBeInTheDocument();

  });

  it('Envia el formulario on click', () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <FormUserAuthentication authenticationType="login" />
      </BrowserRouter>
    );
    const submitButton = screen.getByRole('button', { name: /Iniciar sesión/i });
    const form = document.querySelector('.containerForm') as HTMLElement;
    const usernameInput = document.querySelector('#ILusername') as HTMLElement;
    const passwordInput = document.querySelector('#ILpassword') as HTMLInputElement;


    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    form.addEventListener('submit', handleSubmit);
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });

});

export { }