import React, { ComponentType } from 'react';
import { components } from 'react-select';
import CloseIc from 'assets/icons/ic-close.svg';
import css from './MultiValueRemove.scss';

const MultiValueRemove: ComponentType = () => {
  return null;
};

export const MultiValueRemoveWrap: ComponentType = props => {
  return (
    <components.MultiValueRemove {...props}>
      <div className={css['remove']}>
        <CloseIc className={css['icon']} />
      </div>
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
