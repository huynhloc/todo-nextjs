import React from 'react';
import Swiper, {
  ReactIdSwiperProps,
  ReactIdSwiperChildren,
  GetSwiper,
} from 'react-id-swiper';
import 'swiper/css/swiper.css';

const swiperDefaultParams: ReactIdSwiperProps = {
  loop: true,
  slidesPerView: 'auto',
  grabCursor: false,
  centeredSlides: false,
};

type Props = {
  swiperParams?: ReactIdSwiperProps;
  children: ReactIdSwiperChildren;
  getSwiper?: GetSwiper;
};

const Slider: React.FC<Props> = ({
  swiperParams = {},
  children,
  getSwiper,
}) => {
  const mergedSwiperParams = { ...swiperDefaultParams, ...swiperParams };
  return (
    <Swiper {...mergedSwiperParams} getSwiper={getSwiper}>
      {children}
    </Swiper>
  );
};

export default Slider;
