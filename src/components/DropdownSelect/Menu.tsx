import React from 'react';
import { MenuProps, components } from 'react-select';
import css from './Menu.scss';

type Props = MenuProps<DropdownOption>;

const Menu: React.FC<Props> = ({ children, ...props }) => {
  return (
    <components.Menu {...props} className={css['menu-container']}>
      {children}
    </components.Menu>
  );
};

export default Menu;
