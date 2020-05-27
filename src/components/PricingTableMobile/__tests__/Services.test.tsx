import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PROFESSIONAL } from 'constants/pricingTable';
import Services from '../Services';

afterEach(cleanup);

describe('Services Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(<Services planKey={PROFESSIONAL} />);
    expect(container).toMatchSnapshot();
  });
});
