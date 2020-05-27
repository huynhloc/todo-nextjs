import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import css from './Button.scss';

type Props = {
  href?: string;
  as?: string;
  target?: string;
  disabled?: boolean;
  isBusy?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?:
    | (((event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
        ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void))
    | undefined;
  children: React.ReactNode;
  id?: string;
  theme?: 'border' | 'textOnly' | 'containedColor';
  buttonType?: 'scalable' | 'fixed';
  color?: 'black' | 'white' | 'purple';
  className?: string;
  contentClass?: string;
};

type buttonComponentType = 'a' | 'button' | typeof Link;

const Button: React.FC<Props> = ({
  href = '',
  as = '',
  target,
  disabled,
  isBusy,
  type = 'button',
  onClick,
  children,
  id,
  className,
  contentClass,
  buttonType = 'fixed',
  theme = 'containedColor',
  color = 'black',
}) => {
  let ButtonComponent: buttonComponentType = 'button';
  if (href && (/^http/.test(href) || /^mailto/.test(href))) {
    ButtonComponent = 'a';
  } else if (href || as) {
    ButtonComponent = Link;
  } else if (target) {
    ButtonComponent = 'a';
  }

  const isLink = ButtonComponent === Link;
  const isButton = !isLink;

  const ButtonElement = isLink ? 'a' : 'button';

  const isDisabled = disabled || isBusy;

  const renderButton = () => {
    return (
      <ButtonElement
        disabled={isButton ? isDisabled : undefined}
        target={target}
        type={isButton ? type : undefined}
        onClick={isDisabled ? undefined : onClick}
        id={id}
        className={cx(
          css['button'],
          css[`button--${buttonType}`],
          css[`button--${theme}`],
          {
            [css[`button--${color}`]]: theme === 'containedColor',
            [css['button--disabled']]: disabled,
          },
          className
        )}
      >
        <div className={cx(css['button-children'], contentClass)}>
          {!isBusy ? (
            children
          ) : (
            <>
              <div className={css['loader']}></div>
              Please wait...
            </>
          )}
        </div>
      </ButtonElement>
    );
  };
  if (isLink) {
    return (
      <Link href={href} as={as}>
        {renderButton()}
      </Link>
    );
  }
  return renderButton();
};

export default Button;
