import React from 'react';
import { MenuItem } from 'components';
import css from './MenuGroup.scss';

type Props = {
  items: MenuItemType[];
};

const MenuGroup: React.FC<Props> = ({ items }) => {
  return (
    <div className={css['container']}>
      {items.map((item, index) => {
        return <MenuItem item={item} key={index} />;
      })}
    </div>
  );
};

export default MenuGroup;
