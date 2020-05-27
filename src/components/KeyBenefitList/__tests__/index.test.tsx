import React from 'react';
import { render, cleanup } from '@testing-library/react';
import KeyBenefitList from '../KeyBenefitList';

afterEach(cleanup);

describe('KeyBenefit Component', () => {
  test('KeyBenefit should match snapshot', () => {
    const { container } = render(<KeyBenefitList />);
    expect(container).toMatchSnapshot();
  });
});
