import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Toast, ToastMessage } from 'components';
import { ToastContext } from './ToastContext';

type Props = {
  children: React.ReactChild;
};

const ToastProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ToastTheme>('success');
  const toastMessage = (
    message: string,
    toastTheme: ToastTheme = 'success'
  ) => {
    setTheme(toastTheme);
    toast(
      ({ closeToast }: { closeToast: () => void }) => (
        <ToastMessage
          message={message}
          closeToast={closeToast}
          theme={toastTheme}
        />
      ),
      {
        position: 'top-center',
      }
    );
  };

  return (
    <ToastContext.Provider value={{ toastMessage }}>
      <Toast theme={theme} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
