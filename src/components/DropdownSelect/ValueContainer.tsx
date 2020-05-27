import React from 'react';
import { ValueContainerProps, components } from 'react-select';
import cx from 'classnames';
import css from './ValueContainer.scss';

type Props = ValueContainerProps<DropdownOption>;

const ValueContainer: React.FC<Props> = ({ isMulti, children, ...props }) => (
  <components.ValueContainer
    {...props}
    isMulti={isMulti}
    className={cx(css['value-container'], css['value-container--multi'])}
  >
    {children}
  </components.ValueContainer>
);

export const ValueContainerWrap: React.FC<Props> = ({
  isMulti,
  children,
  ...props
}) => (
  <components.ValueContainer
    {...props}
    isMulti={isMulti}
    className={cx(css['value-container'], css['value-container--warp-multi'], {
      [css['multi']]: isMulti,
    })}
  >
    {children}
  </components.ValueContainer>
);

export default ValueContainer;
