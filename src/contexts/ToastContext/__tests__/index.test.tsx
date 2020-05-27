import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ToastProvider from '../ToastProvider';
import { ToastContext } from '../ToastContext';

afterEach(() => {
  cleanup();
  jest.useFakeTimers();
});

describe('Toast context', () => {
  test('Toast context should match snapshot', () => {
    const { container } = render(
      <ToastProvider>
        <div>Test for toast</div>
      </ToastProvider>
    );
    expect(container).toMatchSnapshot();
  });

  describe('Toast context should show', () => {
    test('Toast show success message', () => {
      const { asFragment } = render(
        <ToastProvider>
          <ToastContext.Consumer>
            {({ toastMessage }) => {
              toastMessage && toastMessage('Success', 'success');
              return <div>Test for toast</div>;
            }}
          </ToastContext.Consumer>
        </ToastProvider>
      );
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });

    test('Toast error message', () => {
      const { asFragment } = render(
        <ToastProvider>
          <ToastContext.Consumer>
            {({ toastMessage }) => {
              toastMessage && toastMessage('Error', 'error');
              return <div>Test for toast</div>;
            }}
          </ToastContext.Consumer>
        </ToastProvider>
      );
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });

    test('Toast warning message', () => {
      const { asFragment } = render(
        <ToastProvider>
          <ToastContext.Consumer>
            {({ toastMessage }) => {
              toastMessage && toastMessage('Warning', 'warning');
              return <div>Test for toast</div>;
            }}
          </ToastContext.Consumer>
        </ToastProvider>
      );
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
    });

    test('Toast close message', () => {
      const { asFragment, getByTestId } = render(
        <ToastProvider>
          <ToastContext.Consumer>
            {({ toastMessage }) => {
              toastMessage && toastMessage('Warning', 'warning');
              return <div>Test for toast</div>;
            }}
          </ToastContext.Consumer>
        </ToastProvider>
      );
      jest.runAllTimers();
      expect(asFragment()).toMatchSnapshot();
      const close = getByTestId('close-icon');
      expect(close).not.toBeNull();
      fireEvent.click(close);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
