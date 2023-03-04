/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */

import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('FormUserAuthentication', () => {

    it('renders correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const nav = document.querySelector('.navContainer') as HTMLElement;
        expect(nav).toBeInTheDocument();
    });
});

export { }