import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SliderOnMobile from '../SliderOnMobile';

afterEach(cleanup);

const ITEMS = ['item1', 'item2', 'item3', 'item4'];

describe('SliderOnMobile Component', () => {
  test('SliderOnMobile should match snapshot', () => {
    const renderContent = () => {
      return ITEMS.map((item, index) => {
        return <div key={index}>{item}</div>;
      });
    };
    const { container } = render(
      <SliderOnMobile
        desktopComponent={renderContent()}
        mobileComponent={renderContent()}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
