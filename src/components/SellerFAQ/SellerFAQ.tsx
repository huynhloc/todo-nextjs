import React from 'react';
import { FAQ } from 'constants/sellerLandingPage';
import { Container, CollapseGroup, Button } from 'components';
import css from './SellerFAQ.scss';

const SellerFAQ = () => {
  return (
    <Container className={css['container']}>
      <h2 className={css['header']}>FAQ</h2>
      <div className={css['FAQ-section']}>
        <CollapseGroup collapseItems={FAQ} />
        <div>
          <p className={css['help-question']}>
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button buttonType="fixed" theme="border">
            Help center
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SellerFAQ;
