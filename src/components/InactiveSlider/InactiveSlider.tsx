import React from 'react';
import {
  ReactIdSwiperProps,
  ReactIdSwiperChildren,
  GetSwiper,
} from 'react-id-swiper/lib/types';
import { Slider } from 'components';

const swiperDefaultParams: ReactIdSwiperProps = {
  autoplay: {
    delay: 800,
  },
  centeredSlides: true,
  speed: 1000,
  allowTouchMove: false,
};

type Props = {
  swiperParams?: ReactIdSwiperProps;
  children: ReactIdSwiperChildren;
  getSwiper?: GetSwiper;
};

const InactiveSlider: React.FC<Props> = ({
  swiperParams = {},
  children,
  getSwiper,
}) => {
  const mergedSwiperParams = { ...swiperDefaultParams, ...swiperParams };
  return (
    <Slider getSwiper={getSwiper} swiperParams={mergedSwiperParams}>
      {children}
    </Slider>
  );
};

export default InactiveSlider;
