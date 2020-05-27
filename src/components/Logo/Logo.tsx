import React from 'react';
import cx from 'classnames';
import LogoIcon from 'assets/icons/ic-logo.svg';
import css from './Logo.scss';

type Props = {
  width?: number;
  height?: number;
  theme?: 'dark' | 'light';
  className?: string;
};

const Logo: React.FC<Props> = ({
  width = 100,
  height = 27,
  theme = 'dark',
  className,
}) => {
  return (
    <LogoIcon
      width={width}
      height={height}
      className={cx(css[`logo--${theme}`], className)}
    />
  );
};

export default Logo;
