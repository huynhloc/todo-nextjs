import React from 'react';
import css from './SellerProcess.scss';

type Props = {
  process: SellerProcessType;
};

const SellerProcess: React.FC<Props> = ({
  process: { src, title, description },
}) => {
  return (
    <div className={css['container']}>
      <img src={src} alt="process" className={css['img']} />
      <h3 className={css['title']}>{title}</h3>
      <p className={css['description']}>{description}</p>
    </div>
  );
};

export default SellerProcess;
