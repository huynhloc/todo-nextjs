import React from 'react';
import { CLIENT_STORIES } from 'constants/sellerLandingPage';
import { Container, Slider, ClientStory } from 'components';
import css from './ClientStorySlider.scss';

const ClientStorySlider = () => {
  return (
    <div className={css['container']}>
      <Container className={css['title-container']}>
        <h2>Our client stories</h2>
      </Container>
      <Container>
        <Slider
          swiperParams={{
            autoplay: {
              delay: 6000,
              disableOnInteraction: false,
            },
            spaceBetween: 24,
            slidesPerView: 1.3,
            breakpoints: {
              720: {
                slidesPerView: 1.5,
              },
            },
          }}
        >
          {CLIENT_STORIES.map((client, index) => {
            const theme = index % 2 === 0 ? 'light' : 'dark';
            return (
              <div key={index} className={css['swiper-slider']}>
                <ClientStory client={client} theme={theme} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default ClientStorySlider;
