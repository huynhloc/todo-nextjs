import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ROUTES } from 'constants/routes';
import Footer from '../Footer';

afterEach(cleanup);

describe('Footer Component', () => {
  test('Footer should match snapshot', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.HOME,
    }));
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  test('Footer should match snapshot when current route is signup page', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.SIGN_UP,
    }));
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
  test('Footer should match snapshot when current route is confirm email page', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.EMAIL_CONFIRMATION,
    }));
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
  test('Footer should match snapshot when current route is login page', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.SIGN_IN,
    }));
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
