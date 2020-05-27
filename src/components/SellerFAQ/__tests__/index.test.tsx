import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SellerFAQ from '../SellerFAQ';

afterEach(cleanup);

describe('SellerFAQ Component', () => {
  test('SellerFAQ should match snapshot', () => {
    const { container } = render(<SellerFAQ />);
    expect(container).toMatchSnapshot();
  });
});
