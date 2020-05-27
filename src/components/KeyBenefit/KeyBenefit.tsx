import React from 'react';
import css from './KeyBenefit.scss';

type Props = {
  benefit: KeyBenefitType;
};

const KeyBenefit: React.FC<Props> = ({ benefit }) => {
  const { icon: Icon, title, description } = benefit;
  return (
    <div className={css['container']}>
      <Icon className={css['icon']} />
      <h3 className={css['title']}>{title}</h3>
      <p className={css['description']}>{description}</p>
    </div>
  );
};

export default KeyBenefit;
