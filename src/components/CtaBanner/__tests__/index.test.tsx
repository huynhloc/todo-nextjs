import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CtaBanner from '../CtaBanner';

afterEach(cleanup);

describe('CtaBanner Component', () => {
  test('CtaBanner should match snapshot', () => {
    const { container } = render(<CtaBanner />);
    expect(container).toMatchSnapshot();
  });
});
