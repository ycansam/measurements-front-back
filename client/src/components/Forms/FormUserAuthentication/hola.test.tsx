/* eslint-disable testing-library/prefer-screen-queries */

import FormUserAuthentication from './FormUserAuthentication';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('FormUserAuthentication', () => {

  it('renders correctly', () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <FormUserAuthentication authenticationType="login" />
      </BrowserRouter>
    );
    expect(getByText('Inicio de Sesión')).toBeInTheDocument();
    expect(getByLabelText('Usuario')).toBeInTheDocument();
    expect(getByLabelText('Contraseña')).toBeInTheDocument();
  });

});

export { }