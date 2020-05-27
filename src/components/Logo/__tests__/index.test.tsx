import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Logo from '../Logo';

afterEach(cleanup);

describe('Logo Component', () => {
  test('Logo should match snapshot', () => {
    const { container } = render(
      <>
        <Logo height={10} width={10} />
        <Logo theme="dark" />
        <Logo theme="light" />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
