import React from 'react';
import image from 'assets/images/cta-banner.png';
import { Container, Button } from 'components';
import css from './CtaBanner.scss';

const CtaBanner = () => {
  return (
    <Container className={css['wrapper']}>
      <div className={css['container']}>
        <div className={css['title-container']}>
          <h2 className={css['header']}>
            Reach a global customer base for your professional services
          </h2>
          <Button buttonType="fixed" theme="containedColor" color="white">
            Get started
          </Button>
        </div>
        <div className={css['image-section']}>
          <img src={image} className={css['img']} />
        </div>
      </div>
    </Container>
  );
};

export default CtaBanner;
