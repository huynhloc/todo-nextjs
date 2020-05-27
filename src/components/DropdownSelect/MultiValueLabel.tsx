import React, { ComponentType } from 'react';
import css from './MultiValueLabel.scss';

const MultiValueLabel: ComponentType = ({ children }) => {
  return <div className={css['label']}>{children}</div>;
};

export const MultiValueLabelWrap: ComponentType = ({ children }) => {
  return <div className={css['label-wrap']}>{children}</div>;
};

export default MultiValueLabel;
