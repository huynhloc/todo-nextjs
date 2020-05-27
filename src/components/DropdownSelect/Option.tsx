import React from 'react';
import { components, OptionProps } from 'react-select';
import cx from 'classnames';
import CheckedIC from 'assets/icons/ic-checked.svg';
import css from './Option.scss';

type Props = OptionProps<DropdownOption>;

const Option: React.FC<Props> = ({
  isMulti,
  isDisabled,
  isSelected,
  children,
  ...props
}) => {
  return (
    <components.Option
      {...props}
      isSelected={isSelected}
      isDisabled={isDisabled}
      isMulti={isMulti}
      className={cx(css['option'], {
        [css['option--selected']]: isSelected,
        [css['option--disabled']]: isDisabled,
      })}
    >
      <div className={css['option-container']}>
        {isMulti && (
          <div
            className={cx(css['checkbox'], {
              [css['checkbox--selected']]: isSelected,
            })}
          >
            <CheckedIC
              className={cx(css['checkbox-icon'], {
                [css['checkbox-icon--selected']]: isSelected,
              })}
            />
          </div>
        )}
        <div className={css['option-text']}>{children}</div>
      </div>
    </components.Option>
  );
};

export default Option;
