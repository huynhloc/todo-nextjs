import React from 'react';
import { PlanKey } from 'types/pricingTable';
import { PLAN_SERVICES, MOBILE_SERVICES_ORDER } from 'constants/pricingTable';
import Service from './Service';
import css from './Services.scss';

type Props = {
  planKey: PlanKey;
};

const Services: React.FC<Props> = ({ planKey }) => {
  const planServices = PLAN_SERVICES[planKey];
  return (
    <div>
      {MOBILE_SERVICES_ORDER.map((service, index) => {
        const { name, subServices } = service;
        return (
          <div key={index} className={css['service-container']}>
            <p className={css['header']}>{name}</p>
            <div className={css['sub-service-container']}>
              {subServices.map((subService, subIndex) => {
                return (
                  <Service
                    service={subService}
                    planServices={planServices}
                    key={`${index}-${subIndex}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
