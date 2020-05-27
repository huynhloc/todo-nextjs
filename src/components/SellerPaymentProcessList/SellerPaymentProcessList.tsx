import React from 'react';
import { Container, SellerPaymentProcess } from 'components';
import { SELLER_PAYMENT_PROCESSES } from 'constants/sellerLandingPage';
import css from './SellerPaymentProcessList.scss';

const SellerPaymentProcessList = () => {
  return (
    <Container className={css['container']}>
      <h2 className={css['title']}>Getting paid is now simple and secure</h2>
      <div className={css['process-container']}>
        {SELLER_PAYMENT_PROCESSES.map((process, index) => {
          return <SellerPaymentProcess process={process} key={index} />;
        })}
      </div>
    </Container>
  );
};

export default SellerPaymentProcessList;
