import React from 'react';
import { components, MultiValueProps } from 'react-select';
import css from './MultiValueContainer.scss';

type Props = MultiValueProps<DropdownOption>;

const MultiValue: React.FC<Props> = props => {
  return (
    <components.MultiValue {...props} className={css['multi-container']} />
  );
};

export default MultiValue;
