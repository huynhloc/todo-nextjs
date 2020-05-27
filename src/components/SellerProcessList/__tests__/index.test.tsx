import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SellerProcessList from '../SellerProcessList';

afterEach(cleanup);

describe('SellerProcessList Component', () => {
  test('SellerProcessList should match snapshot', () => {
    const { container } = render(<SellerProcessList />);
    expect(container).toMatchSnapshot();
  });
});
