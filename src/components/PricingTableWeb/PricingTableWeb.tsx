import React, { useState } from 'react';
import { find } from 'lodash';
import { Container } from 'components';
import { PLAN_OPTIONS } from 'constants/pricingTable';
import { PlansOption, PlanKey } from 'types/pricingTable';
import Services from './Services';
import Plans from './Plans';
import PlanDropdown from './PlanDropdown';
import css from './PricingTableWeb.scss';

const PricingTableWeb = () => {
  const [selectedPlan, setSelectivePlan] = useState<PlansOption>(
    PLAN_OPTIONS[1]
  );

  const onChange = (plan: PlansOption) => {
    setSelectivePlan(plan);
  };

  const onClick = (planKey: PlanKey) => {
    const planOption = find(PLAN_OPTIONS, option => option.value === planKey);
    planOption && onChange(planOption);
  };

  return (
    <Container className={css['container-wrapper']}>
      <PlanDropdown
        value={selectedPlan}
        options={PLAN_OPTIONS}
        onChange={value => onChange(value as PlansOption)}
      />
      <div className={css['container']}>
        <Plans selectedPlan={selectedPlan} onClick={onClick} />
        <Services selectedPlan={selectedPlan} onClick={onClick} />
      </div>
    </Container>
  );
};

export default PricingTableWeb;
