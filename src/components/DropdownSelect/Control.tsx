import React from 'react';
import { components, ControlProps } from 'react-select';
import css from './Control.scss';

type Props = ControlProps<DropdownOption>;

const Control: React.FC<Props> = ({ ...props }) => (
  <components.Control {...props} className={css['control']} />
);

export default Control;
