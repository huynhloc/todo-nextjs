/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ReactIdSwiperProps,
  ReactIdSwiperChildren,
  GetSwiper,
} from 'react-id-swiper/lib/types';
import cx from 'classnames';
import { Container, Slider } from 'components';
import css from './SliderOnMobile.scss';

type Props = {
  desktopComponent: React.ReactNode;
  mobileComponent: ReactIdSwiperChildren;
  desktopContainerClassName?: string;
  mobileContainerClassName?: string;
  swiperParams?: ReactIdSwiperProps;
  getSwiper?: GetSwiper;
};

const SliderOnMobile: React.FC<Props> = ({
  desktopComponent,
  mobileComponent,
  swiperParams = {},
  mobileContainerClassName,
  desktopContainerClassName,
  getSwiper,
}) => {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  const defaultSwiperPrams: ReactIdSwiperProps = {
    loop: false,
    pagination: {
      el: `.swiper-pagination.swiper-pagination-progressbar.${css['progress-bar']}`,
      type: 'progressbar',
      progressbarFillClass: `${css['progressbar-fill']}`,
    },
    on: {
      init: function() {
        const swiper: any = this;
        setTotal(swiper.slides.length);
      },
      slideChange: function() {
        const swiper: any = this;
        setCurrent(swiper.realIndex + 1);
      },
      resize: function() {
        const swiper: any = this;
        setTotal(swiper.slides.length);
        swiper.updateSize();
      },
    },
  };

  const customSwiperParams = {
    ...defaultSwiperPrams,
    ...swiperParams,
  };

  const currentPagination = current.toString().padStart(2, '0');
  const totalSlides = total.toString().padStart(2, '0');

  return (
    <>
      <Container
        className={cx(css['desktop-container'], desktopContainerClassName)}
      >
        {desktopComponent}
      </Container>
      <Container
        className={cx(css['mobile-container'], mobileContainerClassName)}
      >
        <Slider swiperParams={customSwiperParams} getSwiper={getSwiper}>
          {mobileComponent}
        </Slider>
        <p className={css['count-slides']}>
          {currentPagination} / {totalSlides}
        </p>
      </Container>
    </>
  );
};

export default SliderOnMobile;
