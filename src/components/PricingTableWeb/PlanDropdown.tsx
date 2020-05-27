import React from 'react';
import { ValueType } from 'react-select/src/types';
import { PlansOption } from 'types/pricingTable';
import { Dropdown, HyperLink } from 'components';
import css from './PricingTableWeb.scss';

type Props = {
  value: PlansOption;
  options: PlansOption[];
  onChange: (value: ValueType<PlansOption>) => void;
};

const PlanDropdown: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <div className={css['header-wrapper']}>
      <div className={css['header-container']}>
        <h2 className={css['header']}>Choosing a plan for your</h2>
        <Dropdown
          value={value}
          options={options}
          onChange={value => onChange(value as PlansOption)}
          instanceId="plan-dropdown"
          valueContainerClassName={css['value-container']}
          dropdownIndicatorClassName={css['dropdown-indicator']}
          controlClassName={css['control-container']}
        />
      </div>
      <HyperLink href={'/'} theme="purple" hasHoverOpacity={false}>
        <p className={css['header-link']}>
          Enterprise? Contact us for a custom solution
        </p>
      </HyperLink>
    </div>
  );
};

export default PlanDropdown;
