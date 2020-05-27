import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PricingTableMobile from '../PricingTableMobile';

afterEach(cleanup);

describe('PricingTableMobile Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(<PricingTableMobile />);
    expect(container).toMatchSnapshot();
  });
});
