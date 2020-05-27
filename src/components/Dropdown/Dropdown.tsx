import React from 'react';
import Select, {
  ValueType,
  components,
  ControlProps,
  ActionMeta,
  SingleValueProps,
  IndicatorProps,
  OptionProps,
  MenuProps,
  ValueContainerProps,
} from 'react-select';
import cx from 'classnames';
import ArrowDown from 'assets/icons/ic-arrow-down.svg';
import css from './Dropdown.scss';

// @NOTE dude to some scss import problem,
// in order to override class name by custom class name
// in your scss file please add 'div' string before your class name
// exp in scss file: div.my-custom-class {}

type Option = {
  value: string | number | boolean;
  label: string | JSX.Element;
};

type Options = Option[];

type DropdownProps = {
  value: Option;
  options: Options;
  onChange: (value: ValueType<Option>, actionMeta?: ActionMeta) => void;
  instanceId?: string;
  controlClassName?: string;
  singleValueClassName?: string;
  dropdownIndicatorClassName?: string;
  optionClassName?: string;
  optionSelectedClassName?: string;
  optionTextClassName?: string;
  menuClassName?: string;
  valueContainerClassName?: string;
};

type ControlCustomProps = ControlProps<Option> & {
  controlClassName?: string;
};

const Control: React.FC<ControlCustomProps> = ({
  controlClassName,
  ...props
}) => {
  return (
    <components.Control
      {...props}
      className={cx(css['dropdown-container'], controlClassName)}
    />
  );
};

type SingleValueCustomProps = SingleValueProps<Option> & {
  singleValueClassName?: string;
};

const SingleValue: React.FC<SingleValueCustomProps> = ({
  children,
  singleValueClassName,
  ...props
}) => {
  return (
    <components.SingleValue
      {...props}
      className={cx(css['single-select'], singleValueClassName)}
    >
      {children}
    </components.SingleValue>
  );
};

type ValueContainerCustomProps = ValueContainerProps<Option> & {
  valueContainerClassName?: string;
};

const ValueContainer: React.FC<ValueContainerCustomProps> = ({
  children,
  valueContainerClassName,
  ...props
}) => (
  <components.ValueContainer
    {...props}
    className={cx(css['value-container'], valueContainerClassName)}
  >
    {children}
  </components.ValueContainer>
);

type DropdownIndicator = IndicatorProps<Option> & {
  dropdownIndicatorClassName?: string;
};

const DropdownIndicator: React.FC<DropdownIndicator> = ({
  dropdownIndicatorClassName,
  ...props
}) => {
  return (
    <div>
      <components.DropdownIndicator
        {...props}
        className={css['dropdown-indicator-container']}
      >
        <ArrowDown
          className={cx(css['indicator-icon'], dropdownIndicatorClassName)}
        />
      </components.DropdownIndicator>
    </div>
  );
};

const IndicatorSeparator = () => {
  return <span />;
};

type OptionCustomType = OptionProps<Option> & {
  optionClassName?: string;
  optionSelectedClassName?: string;
  optionTextClassName?: string;
};

const Option: React.FC<OptionCustomType> = ({
  isSelected,
  children,
  optionClassName,
  optionSelectedClassName = '',
  optionTextClassName,
  ...props
}) => {
  return (
    <components.Option
      {...props}
      isSelected={isSelected}
      className={cx(
        css['option'],
        {
          [css['option--selected']]: isSelected,
          [optionSelectedClassName]: isSelected,
        },
        optionClassName
      )}
    >
      <div className={cx(css['option-text'], optionTextClassName)}>
        {children}
      </div>
    </components.Option>
  );
};

type MenuCustomType = MenuProps<Option> & {
  menuClassName?: string;
};

const Menu: React.FC<MenuCustomType> = ({
  menuClassName,
  children,
  ...props
}) => {
  return (
    <components.Menu
      {...props}
      className={cx(css['menu-container'], menuClassName)}
    >
      {children}
    </components.Menu>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onChange,
  instanceId = 'dropdown',
  singleValueClassName,
  valueContainerClassName,
  controlClassName,
  dropdownIndicatorClassName,
  optionClassName,
  optionSelectedClassName,
  optionTextClassName,
  menuClassName,
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      components={{
        Control: props => Control({ ...props, controlClassName }),
        SingleValue: props => SingleValue({ ...props, singleValueClassName }),
        IndicatorSeparator,
        DropdownIndicator: props =>
          DropdownIndicator({ ...props, dropdownIndicatorClassName }),
        Option: props =>
          Option({
            ...props,
            optionClassName,
            optionSelectedClassName,
            optionTextClassName,
          }),
        Menu: props => Menu({ ...props, menuClassName }),
        ValueContainer: props =>
          ValueContainer({ ...props, valueContainerClassName }),
      }}
      instanceId={instanceId}
      isClearable={false}
      isSearchable={false}
      classNamePrefix={'dropdown'}
    />
  );
};

export default Dropdown;
