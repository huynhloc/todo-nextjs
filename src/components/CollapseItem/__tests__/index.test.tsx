import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CollapseItem from '../CollapseItem';

afterEach(cleanup);

const item = {
  title: 'title',
  content: 'content',
};

describe('CollapseItem Component', () => {
  test('CollapseItem should match snapshot', () => {
    const { container } = render(<CollapseItem item={item} />);
    expect(container).toMatchSnapshot();
  });
});
