import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ToastMessage from '../ToastMessage';

afterEach(cleanup);

describe('ToastMessage Component', () => {
  test('ToastMessage should match snapshot', () => {
    const { container } = render(
      <>
        <ToastMessage
          message={'Test message'}
          closeToast={() => null}
          theme="success"
        />
        <ToastMessage
          message={'Test message'}
          closeToast={() => null}
          theme="error"
        />
        <ToastMessage
          message={'Test message'}
          closeToast={() => null}
          theme="warning"
        />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
