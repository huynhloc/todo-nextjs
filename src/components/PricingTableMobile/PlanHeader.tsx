import React from 'react';
import { PlanKey } from 'types/pricingTable';
import { PLANS_HEADER } from 'constants/pricingTable';
import { Button } from 'components';
import css from './PlanHeader.scss';

type Props = {
  planKey: PlanKey;
  isContentSelected: boolean;
};

const PlanHeader: React.FC<Props> = ({ planKey, isContentSelected }) => {
  const { name, price, description } = PLANS_HEADER[planKey];
  return (
    <div>
      <h3 className={css['name']}>{name}</h3>
      <h2 className={css['price']}>{price}</h2>
      <p className={css['description']}>{description}</p>
      <Button
        theme="containedColor"
        color="purple"
        disabled={!isContentSelected}
        className={css['button']}
      >
        Get started
      </Button>
    </div>
  );
};

export default PlanHeader;
