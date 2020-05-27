import React from 'react';
import cx from 'classnames';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Toast.scss';

type Props = {
  theme: ToastTheme;
};

const Toast: React.FC<Props> = ({ theme }) => {
  return (
    <ToastContainer
      className={css['toast-container']}
      toastClassName={cx(css['toast'], css[`toast--${theme}`])}
      bodyClassName={css['toast-body']}
      hideProgressBar
      closeButton={false}
      draggable={false}
      transition={Slide}
      pauseOnFocusLoss={false}
    />
  );
};

export default Toast;
