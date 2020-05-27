import React from 'react';
import { MenuListComponentProps, components } from 'react-select';
import { useWindowSize } from 'react-use';
import { XL } from 'constants/media';

const OPTION_HEIGHT_SM = 40;
const OPTION_HEIGHT_XL = 48;

type Props = MenuListComponentProps<DropdownOption> & {
  hasClearOption?: boolean;
  onClearOptionClick?: () => void;
};

const MenuList: React.FC<Props> = ({ isMulti, clearValue, ...props }) => {
  const { width } = useWindowSize();

  const maxHeight = width < XL ? OPTION_HEIGHT_SM * 5 : OPTION_HEIGHT_XL * 5;

  return (
    <components.MenuList
      {...props}
      clearValue={clearValue}
      isMulti={isMulti}
      maxHeight={maxHeight}
    >
      {props.children}
    </components.MenuList>
  );
};

export default MenuList;
