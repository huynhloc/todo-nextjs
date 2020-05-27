import React from 'react';
import cx from 'classnames';
import css from './Container.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.SFC<Props> = ({ children, className }) => {
  return <div className={cx(css['container'], className)}>{children}</div>;
};

export default Container;
