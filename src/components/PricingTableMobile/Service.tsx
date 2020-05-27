import React from 'react';
import { ServiceRowOrder, PlanService } from 'types/pricingTable';
import Checked from 'assets/icons/ic-checked.svg';
import { ICON } from 'constants/pricingTable';
import css from './Service.scss';

type Props = {
  service: ServiceRowOrder;
  planServices: PlanService;
};

const Service: React.FC<Props> = ({ service, planServices }) => {
  const { serviceKey, name, type } = service;
  const value = planServices[serviceKey];

  if (!value) {
    return null;
  }

  if (type === ICON) {
    return (
      <div className={css['container']}>
        <Checked className={css['icon']} />
        <p>{name}</p>
      </div>
    );
  }

  if (typeof value === 'string' && !isNaN(Number(value))) {
    return (
      <div className={css['container']}>
        <Checked className={css['icon']} />
        <p>
          {value} {name}
        </p>
      </div>
    );
  }
  return (
    <div className={css['container']}>
      <Checked className={css['icon']} />
      <p>{value}</p>
    </div>
  );
};

export default Service;
