import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserSessionFormContainer from '../UserSessionFormContainer';

afterEach(cleanup);

describe('UserSessionFormContainer Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(
      <UserSessionFormContainer>
        <>
          <h2>Test form</h2>
          <input type="text" defaultValue="test value" />
        </>
      </UserSessionFormContainer>
    );
    expect(container).toMatchSnapshot();
  });
});
