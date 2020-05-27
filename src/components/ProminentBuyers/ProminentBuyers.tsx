import React from 'react';
import cx from 'classnames';
import { PROMINENT_BUYERS } from 'constants/sellerLandingPage';
import { Container, InactiveSlider } from 'components';
import css from './ProminentBuyers.scss';

const ProminentBuyers = () => {
  return (
    <div className={css['container']}>
      <Container className={css['header-container']}>
        <h2>Trusted by 5000+ businesses</h2>
      </Container>
      <Container className={css['slider-container']}>
        <InactiveSlider>
          {PROMINENT_BUYERS.map((buyer, index) => {
            const { icon: Icon, name } = buyer;
            return (
              <div
                key={index}
                className={cx(
                  css['img-container'],
                  css[`img-container-${name}`]
                )}
              >
                <Icon className={css['img']} />
              </div>
            );
          })}
        </InactiveSlider>
      </Container>
    </div>
  );
};

export default ProminentBuyers;
