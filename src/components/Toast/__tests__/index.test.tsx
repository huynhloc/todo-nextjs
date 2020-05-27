import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';
import Toast from '../Toast';

afterEach(() => {
  cleanup();
  jest.useFakeTimers();
});

const toastMessage = (message: string) => toast(message);

describe('Toast Component', () => {
  test('Toast should match snapshot', () => {
    const { container } = render(<Toast theme="success" />);
    expect(container).toMatchSnapshot();
  });

  describe('Toast should appear', () => {
    test('Toast notify as success', () => {
      const { getByText, asFragment } = render(
        <>
          <button
            onClick={() => {
              toastMessage('Success');
            }}
          >
            Toast
          </button>
          <Toast theme="success" />
        </>
      );
      const button = getByText('Toast');
      fireEvent.click(button);
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });

    test('Toast notify as error', () => {
      const { getByText, asFragment } = render(
        <>
          <button
            onClick={() => {
              toastMessage('Error');
            }}
          >
            Toast
          </button>
          <Toast theme="error" />
        </>
      );
      const button = getByText('Toast');
      fireEvent.click(button);
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });

    test('Toast notify as warning', () => {
      const { getByText, asFragment } = render(
        <>
          <button
            onClick={() => {
              toastMessage('Warning');
            }}
          >
            Toast
          </button>
          <Toast theme="warning" />
        </>
      );
      const button = getByText('Toast');
      fireEvent.click(button);
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
