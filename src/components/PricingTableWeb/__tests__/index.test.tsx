import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PricingTableWeb from '../PricingTableWeb';

afterEach(cleanup);

describe('PricingTableWeb component', () => {
  test('it should snapshot', () => {
    const { container } = render(<PricingTableWeb />);
    expect(container).toMatchSnapshot();
  });
});
