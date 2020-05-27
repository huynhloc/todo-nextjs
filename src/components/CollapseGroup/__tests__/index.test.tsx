import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CollapseGroup from '../CollapseGroup';

afterEach(cleanup);

const items = [
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title2',
    content: 'content2',
  },
];

describe('CollapseGroup Component', () => {
  test('CollapseGroup should match snapshot', () => {
    const { container } = render(<CollapseGroup collapseItems={items} />);
    expect(container).toMatchSnapshot();
  });
});
