import React from 'react';
import { IndicatorProps, components } from 'react-select';
import ArrowDown from 'assets/icons/ic-arrow-down.svg';
import css from './DropdownIndicator.scss';

type Props = IndicatorProps<DropdownOption>;

const DropdownIndicator: React.FC<Props> = ({ ...props }) => {
  return (
    <div>
      <components.DropdownIndicator
        {...props}
        className={css['dropdown-indicator-container']}
      >
        <ArrowDown className={css['indicator-icon']} />
      </components.DropdownIndicator>
    </div>
  );
};

export default DropdownIndicator;
