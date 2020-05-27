import React from 'react';
import cx from 'classnames';
import { PlanKey } from 'types/pricingTable';
import { PLANS_HEADER } from 'constants/pricingTable';
import { Button } from 'components';
import css from './PricingTableWeb.scss';

type PlanHeaderProps = {
  planKey: PlanKey;
  isPlanSelected: boolean;
};

type ButtonProps = {
  theme: 'containedColor' | 'border';
  color?: 'purple';
  disabled?: boolean;
};

const PlanHeader: React.FC<PlanHeaderProps> = ({ planKey, isPlanSelected }) => {
  const header = PLANS_HEADER[planKey];
  const { name, icon: Icon, description, price } = header;
  const buttonProps: ButtonProps = isPlanSelected
    ? {
        theme: 'containedColor',
        color: 'purple',
      }
    : {
        theme: 'border',
        disabled: true,
      };

  return (
    <div className={css['plan-header-container']}>
      <Icon className={css['header-icon']} />
      <h3 className={css['plan-name']}>{name}</h3>
      <h3 className={css['plan-price']}>{price}</h3>
      <div className={css['divider']} />
      <p>{description}</p>
      <Button
        className={cx(css['stared-button'], {
          [css['stared-button--enable']]: isPlanSelected,
        })}
        buttonType="fixed"
        {...buttonProps}
      >
        Get started
      </Button>
    </div>
  );
};

export default PlanHeader;
