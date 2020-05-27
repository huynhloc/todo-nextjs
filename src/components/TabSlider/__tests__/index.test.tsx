import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import StartUpIcon from 'assets/icons/ic-startup.svg';
import ProfessionalIcon from 'assets/icons/ic-professional.svg';
import StudioIcon from 'assets/icons/ic-studio.svg';
import GrowthIcon from 'assets/icons/ic-rocket.svg';
import TabSlider from '../TabSlider';

afterEach(cleanup);

const headers = [
  { icon: StartUpIcon },
  { icon: ProfessionalIcon },
  { icon: StudioIcon },
  { icon: GrowthIcon },
];

describe('TabSlider component', () => {
  test('it should match snapshot', () => {
    const { container } = render(
      <TabSlider tabList={headers}>
        <p>Item1</p>
        <p>Item2</p>
        <p>Item3</p>
      </TabSlider>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should match snapshot when set init tab', () => {
    const { container } = render(
      <TabSlider tabList={headers} swiperParams={{ initialSlide: 1 }}>
        <p>Item1</p>
        <p>Item2</p>
        <p>Item3</p>
      </TabSlider>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should match snapshot when click on tab header', () => {
    const { asFragment, getByTestId } = render(
      <TabSlider tabList={headers}>
        <p>Item1</p>
        <p>Item2</p>
        <p>Item3</p>
      </TabSlider>
    );
    expect(asFragment()).toMatchSnapshot();
    const tab = getByTestId('tab-1');
    fireEvent.click(tab);
    expect(asFragment()).toMatchSnapshot();
  });
});
