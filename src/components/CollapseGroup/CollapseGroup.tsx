import React from 'react';
import CollapseItem from 'components/CollapseItem/CollapseItem';

type Props = {
  collapseItems: FaqCollapseItemType[];
};

const CollapseGroup: React.FC<Props> = ({ collapseItems }) => {
  return (
    <>
      {collapseItems.map((item, index) => {
        return <CollapseItem item={item} key={index} />;
      })}
    </>
  );
};

export default CollapseGroup;
