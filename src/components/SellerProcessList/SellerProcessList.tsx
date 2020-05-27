import React from 'react';
import { SELLER_PROCESSES } from 'constants/sellerLandingPage';
import { Container, SliderOnMobile, SellerProcess } from 'components';
import css from './SellerProcessList.scss';

const SellerProcessList = () => {
  const renderProcess = () => {
    return SELLER_PROCESSES.map((process, index) => {
      return (
        <div key={index} className={css['sell-process-container']}>
          <SellerProcess process={process} />
        </div>
      );
    });
  };

  const renderProcessDesktop = () => {
    return <div className={css['desktop-container']}>{renderProcess()}</div>;
  };

  return (
    <div className={css['container']}>
      <Container className={css['header-container']}>
        <h2>Get started in just {SELLER_PROCESSES.length} steps</h2>
      </Container>
      <SliderOnMobile
        desktopComponent={renderProcessDesktop()}
        mobileComponent={renderProcess()}
      />
    </div>
  );
};

export default SellerProcessList;
