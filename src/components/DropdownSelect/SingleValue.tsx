import React from 'react';
import { SingleValueProps, components } from 'react-select';
import css from './SingleValue.scss';

type Props = SingleValueProps<DropdownOption>;

const SingleValue: React.FC<Props> = ({ children, ...props }) => {
  return (
    <components.SingleValue {...props} className={css['single-value']}>
      {children}
    </components.SingleValue>
  );
};

export default SingleValue;
