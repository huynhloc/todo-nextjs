/*eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Select, { ValueType, ActionMeta, MenuPosition } from 'react-select';
import cx from 'classnames';
import { useWindowScroll } from 'react-use';
import Control from './Control';
import ValueContainer, { ValueContainerWrap } from './ValueContainer';
import SingleValue from './SingleValue';
import Menu from './Menu';
import DropdownIndicator from './DropdownIndicator';
import Option from './Option';
import MenuList from './MenuList';
import MultiValue from './MultiValueContainer';
import MultiValueLabel, { MultiValueLabelWrap } from './MultiValueLabel';
import MultiValueRemove, { MultiValueRemoveWrap } from './MultiValueRemove';
import css from './DropdownSelect.scss';

type DropdownSelectProps = {
  options: DropdownOptions;
  value?: ValueType<DropdownOption>;
  onChange: (value: ValueType<DropdownOption>, actionMeta?: ActionMeta) => void;
  isMulti?: boolean;
  menuPosition?: MenuPosition;
  isClearable?: boolean;
  isSearchable?: boolean;
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  instanceId?: string;
  closeMenuOnSelect?: boolean;
  classNamePrefix?: string;
  inputId?: string;
  multiContainerTheme?: 'wrap' | 'noWrap';
  id?: string;
  name?: string;
};

const IndicatorSeparator = () => {
  return <span />;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  value,
  onChange,
  isMulti = false,
  menuPosition = 'fixed',
  isClearable = false,
  isSearchable = false,
  label,
  placeholder,
  isError,
  errorMessage,
  instanceId = 'dropdown',
  closeMenuOnSelect,
  classNamePrefix = 'dropdown',
  inputId = 'dropdown-input',
  multiContainerTheme = 'noWrap',
  id,
  name,
}) => {
  const defaultPlaceholder = isMulti ? 'Choose options' : 'Choose an option';
  const defaultCloseMenuOnSelect = isMulti ? false : true;
  const [isFocused, setFocus] = useState(false);

  // useWindowScroll to prevent fixed Menu list follow the window scrolling
  useWindowScroll();

  // Depend on Multiple theme is wrap or not wrap to render matched value style
  const CustomValueContainer =
    multiContainerTheme === 'noWrap' ? ValueContainer : ValueContainerWrap;
  const CustomMultiValueLabel =
    multiContainerTheme === 'noWrap' ? MultiValueLabel : MultiValueLabelWrap;
  const CustomMultiValueRemove =
    multiContainerTheme === 'noWrap' ? MultiValueRemove : MultiValueRemoveWrap;

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={cx(css['label'], { [css['label--error']]: isError })}
        >
          {label}
        </label>
      )}
      <div className={css['control-container']}>
        <Select
          options={options}
          value={value}
          onChange={onChange}
          isMulti={isMulti}
          menuPosition={menuPosition}
          isClearable={isClearable}
          isSearchable={isSearchable}
          placeholder={placeholder || defaultPlaceholder}
          instanceId={instanceId}
          components={{
            // @NOTE Please do not use (props) => <Component {...props} additionalProps={...} />
            // This will make the dropdown not work as it should be
            // If you use it on any custom component please make sure there is no UX error
            // Will cause UX error if add additional props: Control, MenuList, Menu
            // Exp: Control with additional props will cause multi dropdown cannot close when
            // click outside after select options
            Control,
            SingleValue,
            Menu,
            IndicatorSeparator,
            DropdownIndicator,
            Option,
            MenuList,
            MultiValue,
            ValueContainer: CustomValueContainer,
            MultiValueLabel: CustomMultiValueLabel,
            MultiValueRemove: CustomMultiValueRemove,
          }}
          closeMenuOnSelect={closeMenuOnSelect || defaultCloseMenuOnSelect}
          // prevent mobile to auto close on select event when set closeMenuOnSelect = false
          blurInputOnSelect={false}
          hideSelectedOptions={false}
          classNamePrefix={classNamePrefix}
          inputId={inputId}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onMenuClose={() => {
            setFocus(false);
          }}
          onMenuOpen={() => {
            setFocus(true);
          }}
          id={id}
          name={name}
          openMenuOnFocus
        />
        <span
          className={cx(css['border'], {
            [css['border--error']]: isError,
            [css['border--focus']]: isFocused,
          })}
        />
      </div>
      {errorMessage && <p className={css['error-message']}>{errorMessage}</p>}
    </div>
  );
};

export default DropdownSelect;
