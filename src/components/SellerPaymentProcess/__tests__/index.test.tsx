import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SellerPaymentProcess from '../SellerPaymentProcess';
import Config from 'assets/icons/ic-config.svg';

afterEach(cleanup);

const process = {
  icon: Config,
  title: 'Nec porta erat tinc',
  description:
    'At elit porta pellentesque aenean. Malesuada non aliquet mauris quisque. Congue enim pellentesque dictumst dictum.',
};

describe('SellerPaymentProcess Component', () => {
  test('SellerPaymentProcess should match snapshot', () => {
    const { container } = render(<SellerPaymentProcess process={process} />);
    expect(container).toMatchSnapshot();
  });
});
