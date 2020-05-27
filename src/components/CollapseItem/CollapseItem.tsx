import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { XL } from 'constants/media';
import Expanse from 'assets/icons/ic-add.svg';
import Collapse from 'assets/icons/ic-close.svg';
import css from './CollapseItem.scss';

type Props = {
  item: FaqCollapseItemType;
};

const MARGIN_MOBILE = 8;
const MARGIN_WEB = 20;

const variants: Variants = {
  expanded: contentMargin => ({
    height: '100%',
    transition: { duration: 0.5, ease: 'easeOut' },
    marginTop: contentMargin,
  }),
  collapsed: {
    height: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
    marginTop: 0,
  },
};

const CollapseItem: React.FC<Props> = ({ item: { title, content } }) => {
  const [isActive, setActive] = useState(false);
  const [contentMargin, setContentMargin] = useState(0);
  const Icon = isActive ? Collapse : Expanse;

  const onItemClick = () => {
    setActive(!isActive);
  };

  const onWindowResize = () => {
    const currentWidth = window.innerWidth;
    currentWidth < XL
      ? setContentMargin(MARGIN_MOBILE)
      : setContentMargin(MARGIN_WEB);
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  });

  return (
    <div onClick={onItemClick} className={css['container']}>
      <div className={css['header-container']}>
        <h3 className={css['title']}>{title}</h3>
        <Icon className={css['icon']} />
      </div>
      <motion.div
        custom={contentMargin}
        className={css['content']}
        initial={'collapse'}
        variants={variants}
        animate={isActive ? 'expanded' : 'collapsed'}
      >
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

export default CollapseItem;
