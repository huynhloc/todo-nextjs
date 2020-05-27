import React, { useState } from 'react';
import { PLANS_ORDER, PLANS_HEADER } from 'constants/pricingTable';
import { TabSlider, Container, HyperLink } from 'components';
import PlanHeader from './PlanHeader';
import Services from './Services';
import css from './PricingTableMobile.scss';

const INITIAL_TAB = 1;

const tabList: TabSliderType[] = PLANS_ORDER.map(planKey => ({
  icon: PLANS_HEADER[planKey].icon,
}));

const PricingTableMobile = () => {
  const [selectedTab, getSelectedTag] = useState(INITIAL_TAB);

  return (
    <div>
      <Container className={css['header-container']}>
        <h2>Choosing a plan for your business</h2>
        <HyperLink href={''} theme="purple" hasHoverOpacity={false}>
          <p className={css['link']}>
            Enterprise? Contact us for a custom solution
          </p>
        </HyperLink>
      </Container>
      <TabSlider
        tabList={tabList}
        initialTab={INITIAL_TAB}
        sliderContainerClassName={css['content-container']}
        getSelectedTag={getSelectedTag}
      >
        {PLANS_ORDER.map((planKey, index) => {
          const isContentSelected = index === selectedTab;
          return (
            <Container key={index}>
              <PlanHeader
                planKey={planKey}
                isContentSelected={isContentSelected}
              />
              <Services planKey={planKey} />
            </Container>
          );
        })}
      </TabSlider>
    </div>
  );
};

export default PricingTableMobile;
