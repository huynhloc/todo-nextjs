import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SellerBanner from '../SellerBanner';

afterEach(cleanup);

describe('SellerBanner Component', () => {
  test('SellerBanner should match snapshot', () => {
    const { container } = render(<SellerBanner />);
    expect(container).toMatchSnapshot();
  });
});
