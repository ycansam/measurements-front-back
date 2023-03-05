/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */

import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';

describe('Header', () => {

    it('Deberia renderizar el Header', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const nav = document.querySelector('.navContainer') as HTMLElement;
        expect(nav).toBeInTheDocument();
    });
});

export { }