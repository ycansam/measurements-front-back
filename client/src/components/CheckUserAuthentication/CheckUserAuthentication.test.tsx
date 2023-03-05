/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckUserAuthentication from './CheckUserAuthentication';
import PagePaths from '../../page-paths';

const mockCheckUserAuthenticationHooks = jest.fn();
jest.mock('./hooks/CheckUserAuthentication.hooks', () => ({
  __esModule: false,
  default: mockCheckUserAuthenticationHooks,
}));

describe('CheckUserAuthentication', () => {
  test('No renderiza nada cuando no esta autenticado', () => {
    mockCheckUserAuthenticationHooks.mockReturnValueOnce({ isNotAuthenticated: false });
    render(<CheckUserAuthentication />);
    expect(screen.queryByText(/.*/)).toBeNull();
  });

  test('Devuele el usuario al login cuando no esta autenticado', () => {
    mockCheckUserAuthenticationHooks.mockReturnValueOnce({ isNotAuthenticated: true });

    render(<CheckUserAuthentication />);
    expect(screen.getByRole('link')).toHaveAttribute('href', PagePaths.LOGIN);
    expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('link')).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('link').childElementCount).toEqual(0);
  });
});