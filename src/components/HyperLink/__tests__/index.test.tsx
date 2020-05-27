import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HyperLink from '../HyperLink';

afterEach(cleanup);

describe('HyperLink Component', () => {
  test('HyperLink should match snapshot', () => {
    const { container } = render(
      <>
        <HyperLink href="https://google.com">External Link</HyperLink>
        <HyperLink href="/about">Internal Link</HyperLink>
        <HyperLink href="/about" theme="purple">
          Internal Link
        </HyperLink>

        <HyperLink href="/about" theme="purple" hasHoverOpacity={false}>
          Internal Link
        </HyperLink>

        <HyperLink
          href="/about"
          theme="purple"
          hasHoverOpacity={false}
          isUnderline
        >
          Internal Link
        </HyperLink>

        <HyperLink href="/about" theme="purple" isUnderline>
          Internal Link
        </HyperLink>

        <HyperLink href="/about" theme="white" isUnderline>
          Internal Link
        </HyperLink>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
