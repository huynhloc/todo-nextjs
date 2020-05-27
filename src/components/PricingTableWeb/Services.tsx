import React from 'react';
import cx from 'classnames';
import {
  SERVICE_ROWS_ORDER,
  PLANS_ORDER,
  PLAN_SERVICES,
} from 'constants/pricingTable';
import { PlansOption, PlanKey } from 'types/pricingTable';
import TableData from './TableData';
import css from './PricingTableWeb.scss';

type Props = {
  selectedPlan: PlansOption;
  onClick: (key: PlanKey) => void;
};

const Services: React.FC<Props> = ({ selectedPlan: { value }, onClick }) => {
  return (
    <div className={css['services-container']}>
      {SERVICE_ROWS_ORDER.map((row, index) => {
        const { serviceKey, name, isHeader, theme, type } = row;
        const isLastRow = index === SERVICE_ROWS_ORDER.length - 1;
        return (
          <div key={index} className={cx(css['service-row'])}>
            <div className={cx({ [css['last-service']]: isLastRow })}>
              <TableData
                data={name}
                type="TEXT"
                theme={theme}
                isService
                isHeader={isHeader}
              />
            </div>
            {PLANS_ORDER.map((planKey, planIndex) => {
              const services = PLAN_SERVICES[planKey];
              const contentPosition = planIndex + 1;
              const isPlanSelected = planKey === value;

              return (
                <div
                  className={cx(
                    css['content-container'],
                    css[`content-container--${contentPosition}`],
                    css['plan-content'],
                    {
                      [css['plan-content--selected']]: isPlanSelected,
                      [css['plan-last-row']]: isLastRow,
                      [css['plan-last-row--selected']]:
                        isLastRow && isPlanSelected,
                    }
                  )}
                  key={`${index}-${planIndex}`}
                  onClick={() => onClick(planKey)}
                >
                  <TableData
                    data={services[serviceKey]}
                    type={type}
                    isHeader={isHeader}
                    theme={theme}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Services;
