import React, { useState } from 'react';
import cx from 'classnames';
import PasswordShow from 'assets/icons/ic-password-show.svg';
import PasswordHide from 'assets/icons/ic-password-hide.svg';
import css from './TextInput.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value: string;
  isError?: boolean;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  type: string;
  label?: string;
  hint?: string;
  errorMessage?: string;
  labelClassName?: string;
  isActive?: boolean;
  showPasswordToggleIcon?: boolean;
};

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      containerClassName,
      onChange,
      value,
      isError,
      placeholder,
      labelClassName,
      className,
      type,
      isActive,
      showPasswordToggleIcon,
      label = '',
      hint = '',
      errorMessage = '',
      ...props
    },
    ref
  ) => {
    const [dynamicType, setDynamicType] = useState(type);
    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const inputProps = {
      type: dynamicType,
      onChange,
      value,
      placeholder,
      ...props,
    };

    const PasswordIcon = isPasswordShow ? PasswordShow : PasswordHide;

    const onPasswordIconClick = () => {
      setDynamicType(isPasswordShow ? 'password' : 'text');
      setIsPasswordShow(!isPasswordShow);
    };

    const message = isError ? errorMessage : hint;
    const isActiveInput = !isError && isActive;

    return (
      <div className={cx(css['input-wrapper'], containerClassName)}>
        {label && (
          <label className={cx(css['label'], labelClassName)} htmlFor={label}>
            {label}
          </label>
        )}
        <div className={css['input-container']}>
          <input
            {...inputProps}
            className={cx(
              css['input'],
              { [css['input-password']]: showPasswordToggleIcon },
              className
            )}
            id={label}
            ref={ref}
          />
          <span
            className={cx(css['focus-border'], {
              [css['focus-border--error']]: isError,
              [css['focus-border--active']]: isActiveInput,
            })}
          />
          {showPasswordToggleIcon && (
            <PasswordIcon
              data-testid="password-icon"
              onClick={onPasswordIconClick}
              className={css['password-icon']}
            />
          )}
        </div>
        {message && (
          <p
            className={cx(css['message'], {
              [css['message--error']]: isError,
              [css['message--active']]: isActiveInput,
            })}
          >
            {message}
          </p>
        )}
      </div>
    );
  }
);

export default TextInput;
