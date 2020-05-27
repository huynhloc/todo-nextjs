import React from 'react';
import { KEY_BENEFITS } from 'constants/sellerLandingPage';
import { Container, KeyBenefit, SliderOnMobile } from 'components';
import css from './KeyBenefitList.scss';

const KeyBenefitList = () => {
  const renderBenefitColumn = (items: KeyBenefitType[]) => {
    return (
      <div>
        {items.map((item, index) => {
          return <KeyBenefit benefit={item} key={index} />;
        })}
      </div>
    );
  };

  const renderBenefitRow = () => {
    return KEY_BENEFITS.map((row, index) => {
      return (
        <div key={index} className={css['row-container']}>
          {renderBenefitColumn(row)}
        </div>
      );
    });
  };

  const renderDesktopBenefits = () => {
    return (
      <div className={css['desktop-benefit-container']}>
        {renderBenefitRow()}
      </div>
    );
  };

  return (
    <div className={css['container']}>
      <Container className={css['header-container']}>
        <h2>Set your business up for success with an Intrepid membership</h2>
      </Container>
      <SliderOnMobile
        desktopComponent={renderDesktopBenefits()}
        mobileComponent={renderBenefitRow()}
      />
    </div>
  );
};

export default KeyBenefitList;
