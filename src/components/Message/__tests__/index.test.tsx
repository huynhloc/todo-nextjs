import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Message from '../Message';

afterEach(cleanup);

describe('Message Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(
      <>
        <Message isShow theme="error">
          Error show message
        </Message>

        <Message isShow={false}>Error hide</Message>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
