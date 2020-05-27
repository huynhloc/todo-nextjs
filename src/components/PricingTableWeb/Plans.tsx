import React from 'react';
import cx from 'classnames';
import { PLANS_ORDER } from 'constants/pricingTable';
import { PlansOption, PlanKey } from 'types/pricingTable';
import PlanHeader from './PlanHeader';
import css from './PricingTableWeb.scss';

type Props = {
  selectedPlan: PlansOption;
  onClick: (key: PlanKey) => void;
};

const Plans: React.FC<Props> = ({ selectedPlan: { value }, onClick }) => {
  return (
    <>
      {PLANS_ORDER.map((planKey, index) => {
        const contentPosition = index + 1;
        const isPlanSelected = planKey === value;
        return (
          <div
            key={index}
            className={cx(
              css['plan-container'],
              css[`plan-container--${contentPosition}`],
              css[`plan-header`],
              { [css[`plan-header--selected`]]: isPlanSelected }
            )}
            onClick={() => {
              onClick(planKey);
            }}
          >
            <PlanHeader planKey={planKey} isPlanSelected={isPlanSelected} />
          </div>
        );
      })}
    </>
  );
};

export default Plans;
