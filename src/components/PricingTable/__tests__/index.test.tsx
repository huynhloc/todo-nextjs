import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PricingTable from '../PricingTable';

afterEach(cleanup);

describe('PricingTable Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(<PricingTable />);
    expect(container).toMatchSnapshot();
  });
});
