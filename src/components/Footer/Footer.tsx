import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { ROUTES } from 'constants/routes';
import { FOOTER_LINKS_ICON, FOOTER_LINKS_TEXT } from 'constants/footer';
import { Logo, Container, HyperLink } from 'components';
import css from './Footer.scss';

const getFooterClassName = (pathname: string) => {
  switch (pathname) {
    case ROUTES.EMAIL_CONFIRMATION:
    case ROUTES.EMAIL_CONFIRMATION_SUCCESS:
    case ROUTES.EMAIL_CONFIRMATION_FAILURE:
    case ROUTES.SIGN_UP:
    case ROUTES.SIGN_IN:
    case ROUTES.GETTING_STARTED:
    case ROUTES.FORGOT_PASSWORD:
    case ROUTES.CHANGE_PASSWORD:
      return css['auto-hidden'];
  }
};

const Footer = () => {
  const router = useRouter();
  const className = getFooterClassName(router.pathname);
  return (
    <div className={cx(css['wrapper'], className)}>
      <Container className={css['container']}>
        <div className={css['top-section']}>
          <Logo theme="light" />
          <div className={css['icons-wrapper']}>
            {FOOTER_LINKS_ICON.map((link, index) => {
              const { url, icon: Icon } = link;
              return (
                <HyperLink href={url} key={index} className={css['link']}>
                  <Icon className={css['icon']} />
                </HyperLink>
              );
            })}
          </div>
        </div>
        <div className={css['bottom-section']}>
          <p className={css['sub-title']}>© 2020 Intrepid</p>
          <div className={css['texts-wrapper']}>
            {FOOTER_LINKS_TEXT.map((link, index) => {
              const { url, title } = link;
              return (
                <HyperLink className={css['link']} key={index} href={url}>
                  <span className={css['link-text']}>{title}</span>
                </HyperLink>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
