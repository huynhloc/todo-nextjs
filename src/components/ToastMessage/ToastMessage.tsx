import React from 'react';
import cx from 'classnames';
import CheckCircle from 'assets/icons/ic-check-circle.svg';
import ErrorCircle from 'assets/icons/ic-error-circle.svg';
import Warning from 'assets/icons/ic-warning.svg';
import Close from 'assets/icons/ic-close.svg';
import css from './ToastMessage.scss';

type Props = {
  message: string;
  theme?: ToastTheme;
  closeToast: () => void;
};

const getIconByTheme = (theme: ToastTheme) => {
  switch (theme) {
    case 'success':
      return CheckCircle;
    case 'error':
      return ErrorCircle;
    case 'warning':
      return Warning;
  }
};

const ToastMessage: React.FC<Props> = ({
  message,
  theme = 'success',
  closeToast,
}) => {
  const Icon = getIconByTheme(theme);
  return (
    <div className={css['container']}>
      <Icon className={cx(css['icon'], css[`color--${theme}`])} />
      <p className={cx(css['message'], css[`color--${theme}`])}>{message}</p>
      <Close
        onClick={closeToast}
        className={cx(css['icon'], css[`color--${theme}`])}
        data-testid="close-icon"
      />
    </div>
  );
};

export default ToastMessage;
