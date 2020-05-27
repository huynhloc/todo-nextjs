import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProminentBuyers from '../ProminentBuyers';

afterEach(cleanup);

describe('Slider Component', () => {
  test('Slider should match snapshot', () => {
    const { container } = render(<ProminentBuyers />);
    expect(container).toMatchSnapshot();
  });
});
