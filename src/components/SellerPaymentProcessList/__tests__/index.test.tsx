import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SellerPaymentProcessList from '../SellerPaymentProcessList';

afterEach(cleanup);

describe('SellerPaymentProcess Component', () => {
  test('SellerPaymentProcess should match snapshot', () => {
    const { container } = render(<SellerPaymentProcessList />);
    expect(container).toMatchSnapshot();
  });
});
