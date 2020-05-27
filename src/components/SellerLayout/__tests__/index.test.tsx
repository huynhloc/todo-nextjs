import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ROUTES } from 'constants/routes';
import SellerLayout from '../SellerLayout';

afterEach(cleanup);

describe('SellerLayout Component', () => {
  test('SellerLayout should match snapshot', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.HOME,
    }));
    const { container } = render(
      <SellerLayout>
        <p>Seller Layout</p>
      </SellerLayout>
    );
    expect(container).toMatchSnapshot();
  });

  test('SellerLayout should match snapshot when current route is signup page', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.SIGN_UP,
    }));
    const { container } = render(
      <SellerLayout>
        <p>Seller Layout</p>
      </SellerLayout>
    );
    expect(container).toMatchSnapshot();
  });

  test('SellerLayout should match snapshot when current route is login page', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      pathname: ROUTES.SIGN_IN,
    }));
    const { container } = render(
      <SellerLayout>
        <p>Seller Layout</p>
      </SellerLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
