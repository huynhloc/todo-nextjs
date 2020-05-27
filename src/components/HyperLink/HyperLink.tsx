import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import css from './HyperLink.scss';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  theme?: 'white' | 'purple';
  hasHoverOpacity?: boolean;
  isUnderline?: boolean;
};

const HyperLink: React.FC<Props> = ({
  href,
  children,
  className,
  theme = 'white',
  hasHoverOpacity = true,
  isUnderline = false,
  ...props
}) => {
  let isExternal = false;
  if (/^http/.test(href) || /^mailto/.test(href)) {
    isExternal = true;
  }

  const linkComponentProps = isExternal ? { href, ...props } : props;
  const linkComponent = () => (
    <a
      className={cx(
        css['link'],
        css[`link--${theme}`],
        {
          [css['link--hover']]: hasHoverOpacity,
          [css['link--underline']]: isUnderline,
        },
        className
      )}
      {...linkComponentProps}
    >
      {children}
    </a>
  );

  if (isExternal) {
    return linkComponent();
  }

  return <Link href={href}>{linkComponent()}</Link>;
};

export default HyperLink;
