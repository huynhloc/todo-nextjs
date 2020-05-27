import React from 'react';
import cx from 'classnames';
import css from './Checkbox.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  containerClassName?: string;
  children: React.ReactChild;
  labelClassName?: string;
};

const Checkbox: React.FC<Props> = ({
  label,
  containerClassName,
  children,
  labelClassName,
  ...props
}) => {
  return (
    <div className={cx(css['container'], containerClassName)}>
      <input {...props} id={label} type="checkbox" />
      <label htmlFor={label} className={cx(css['label'], labelClassName)}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
