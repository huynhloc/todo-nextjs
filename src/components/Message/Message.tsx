import React from 'react';
import cx from 'classnames';
import css from './Message.scss';

type Props = {
  children: React.ReactChild;
  theme?: 'error';
  isShow: boolean;
  className?: string;
  contentClassName?: string;
};

const Message: React.FC<Props> = ({
  children,
  theme = 'error',
  isShow,
  className,
  contentClassName,
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <div
      className={cx(css['container'], css[`container--${theme}`], className)}
    >
      <div
        className={cx(
          css['content-container'],
          css[`content--${theme}`],
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
