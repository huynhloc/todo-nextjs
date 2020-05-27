import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from 'assets/icons/ic-cashflow.svg';
import KeyBenefit from '../KeyBenefit';

afterEach(cleanup);

const ITEM = {
  icon: Icon,
  title: 'Item',
  description: 'Item description',
};

describe('KeyBenefit Component', () => {
  test('KeyBenefit should match snapshot', () => {
    const { container } = render(<KeyBenefit benefit={ITEM} />);
    expect(container).toMatchSnapshot();
  });
});
