import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MenuGroup from '../MenuGroup';
import { MENU_ITEMS } from 'constants/header';

afterEach(cleanup);

describe('MenuGroup Component', () => {
  test('MenuGroup should match snapshot', () => {
    const { container } = render(<MenuGroup items={MENU_ITEMS} />);
    expect(container).toMatchSnapshot();
  });
});
