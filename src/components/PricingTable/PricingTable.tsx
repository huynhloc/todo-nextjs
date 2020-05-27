import React from 'react';
import { PricingTableMobile, PricingTableWeb } from 'components';
import css from './PricingTable.scss';

const PricingTable = () => {
  return (
    <>
      <div className={css['mobile']}>
        <PricingTableMobile />
      </div>
      <div className={css['web']}>
        <PricingTableWeb />
      </div>
    </>
  );
};

export default PricingTable;
