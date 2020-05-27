import React, { useContext } from 'react';

type ContextProps = {
  toastMessage: (message: string, toastTheme: ToastTheme) => void;
};

export const ToastContext = React.createContext<Partial<ContextProps>>({});
export const useToastContext = () => useContext(ToastContext);
