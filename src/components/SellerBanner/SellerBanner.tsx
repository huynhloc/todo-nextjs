import React from 'react';
import { MEDIA_LG_UP, MEDIA_MD_UP } from 'constants/media';
import banner from 'assets/images/seller-banner.jpg';
import banner360 from 'assets/images/seller-banner-360.jpg';
import banner720 from 'assets/images/seller-banner-720.jpg';
import { Container, Button } from 'components';
import css from './SellerBanner.scss';

const SellerBanner = () => {
  return (
    <div className={css['banner-wrapper']}>
      <picture>
        <source media={MEDIA_LG_UP} srcSet={banner} />
        <source media={MEDIA_MD_UP} srcSet={banner720} />
        <img src={banner360} alt="Banner" className={css['img']} />
      </picture>
      <div className={css['text-wrapper']}>
        <Container className={css['text-container']}>
          <h1 className={css['title']}>
            A better way to get more customers and grow your business
          </h1>
          <p className={css['subtitle']}>
            Sell your professional services to the world’s leading enterprises
            on Intrepid’s exclusive business-to-business e-commerce marketplace
          </p>
          <Button buttonType="fixed" theme="containedColor" color="white">
            Start selling
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default SellerBanner;
