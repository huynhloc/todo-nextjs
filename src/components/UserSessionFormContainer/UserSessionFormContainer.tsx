import React from 'react';
import cx from 'classnames';
import SessionFormImgSrc from 'assets/images/session-form.png';
import { Container } from 'components';
import css from './UserSessionFormContainer.scss';

type Props = {
  children: React.ReactChild;
  containerClassName?: string;
  formSectionClassName?: string;
};

const UserSessionFormContainer: React.FC<Props> = ({
  children,
  containerClassName,
  formSectionClassName,
}) => {
  return (
    <Container className={cx(css['container'], containerClassName)}>
      <div className={css['desktop-only']}>
        <img src={SessionFormImgSrc} className={css['img']} />
      </div>
      <div className={cx(css['form-section'], formSectionClassName)}>
        {children}
      </div>
    </Container>
  );
};

export default UserSessionFormContainer;
