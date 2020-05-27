import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Step1 from 'assets/images/step1.png';
import SellerProcess from '../SellerProcess';

afterEach(cleanup);

const process = {
  src: Step1,
  title: '01. Nec porta erat tinc',
  description:
    'In in ultricies eget quam suspendisse metus. Fringilla in vulputate malesuada interdum. Pulvinar eget tempor',
};

describe('SellerProcess Component', () => {
  test('SellerProcess should match snapshot', () => {
    const { container } = render(<SellerProcess process={process} />);
    expect(container).toMatchSnapshot();
  });
});
