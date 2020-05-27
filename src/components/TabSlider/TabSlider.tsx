/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import {
  ReactIdSwiperProps,
  ReactIdSwiperChildren,
  GetSwiper,
  SwiperInstance,
} from 'react-id-swiper';
import { Slider, Container } from 'components';
import css from './TabSlider.scss';

type Props = {
  tabList: TabSliderType[];
  children: ReactIdSwiperChildren;
  swiperParams?: ReactIdSwiperProps;
  getSwiper?: GetSwiper;
  wrapperClassName?: string;
  sliderContainerClassName?: string;
  getSelectedTag?: (index: number) => void;
  initialTab?: number;
};

const TabSlider: React.FC<Props> = ({
  tabList,
  children,
  swiperParams = {},
  wrapperClassName,
  sliderContainerClassName,
  getSelectedTag,
  initialTab = 0,
}) => {
  const [swiper, setSwiper] = useState<SwiperInstance>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(initialTab);

  useEffect(() => {
    setSelectedTabIndex(swiper?.params.initialSlide || initialTab);
  }, [swiper]);

  useEffect(() => {
    getSelectedTag && getSelectedTag(selectedTabIndex);
  }, [selectedTabIndex]);

  const defaultSwiper: ReactIdSwiperProps = {
    loop: false,
    on: {
      slideChange: function() {
        const swiper: any = this;
        const currentIndex = swiper.realIndex;
        setSelectedTabIndex(currentIndex);
      },
    },
    initialSlide: initialTab,
    ...swiperParams,
  };

  const onClick = (index: number) => {
    swiper?.slideTo(index);
    setSelectedTabIndex(index);
  };

  return (
    <div className={cx(wrapperClassName)}>
      <Container className={css['tab-headers-container']}>
        {tabList.map((tab, index) => {
          const { icon: Icon } = tab;
          const isSelected = selectedTabIndex === index;
          return (
            <div
              key={index}
              className={cx(css['header'], {
                [css['header--selected']]: isSelected,
              })}
              onClick={() => onClick(index)}
              data-testid={`tab-${index}`}
            >
              <Icon className={css['icon']} />
            </div>
          );
        })}
      </Container>
      <div className={cx(sliderContainerClassName)}>
        <Slider swiperParams={defaultSwiper} getSwiper={setSwiper}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default TabSlider;
