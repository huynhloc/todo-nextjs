import React from 'react';
import { NextPage } from 'next';
import {
  SellerBanner,
  ProminentBuyers,
  KeyBenefitList,
  SellerProcessList,
  ClientStorySlider,
  SellerPaymentProcessList,
  CtaBanner,
  SellerFAQ,
  PricingTable,
} from 'components';

const Home: NextPage<{}> = () => {
  return (
    <>
      <SellerBanner />
      <ProminentBuyers />
      <KeyBenefitList />
      <SellerProcessList />
      <PricingTable />
      <ClientStorySlider />
      <SellerPaymentProcessList />
      <CtaBanner />
      <SellerFAQ />
    </>
  );
};

export default Home;
