import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MENU_ITEMS } from 'constants/header';
import MenuItem from '../MenuItem';

afterEach(cleanup);

describe('MenuItem Component', () => {
  test('MenuItem should match snapshot', () => {
    const { container } = render(<MenuItem item={MENU_ITEMS[0]} />);
    expect(container).toMatchSnapshot();
  });
});
