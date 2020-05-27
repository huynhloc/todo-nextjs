import React from 'react';
import css from './SellerPaymentProcess.scss';

type Props = {
  process: SellerPaymentProcess;
};

const SellerPaymentProcess: React.FC<Props> = ({
  process: { icon: Icon, title, description },
}) => {
  return (
    <div className={css['container']}>
      <Icon className={css['logo']} />
      <h3 className={css['title']}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SellerPaymentProcess;
