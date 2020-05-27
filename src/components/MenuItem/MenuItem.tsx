import React from 'react';
import { Button } from 'components';
import css from './MenuItem.scss';

type Props = {
  item: MenuItemType;
};

const MenuItem: React.FC<Props> = ({ item: { title } }) => {
  return (
    <Button theme="textOnly" className={css['menu-item-container']}>
      {title}
    </Button>
  );
};

export default MenuItem;
