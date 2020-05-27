import React from 'react';
import cx from 'classnames';
import css from './ClientStory.scss';

type Props = {
  client: ClientStoryType;
  theme?: 'light' | 'dark';
};

const ClientStory: React.FC<Props> = ({
  client: { avatar, clientName, clientQuote, clientTitle, company },
  theme = 'light',
}) => {
  return (
    <div className={cx(css['container'], css[`container--${theme}`])}>
      <img src={avatar} alt="client-avatar" className={css['avatar']} />
      <p className={css['client-quote']}>&quot;{clientQuote}&quot;</p>
      <p className={css['client']}>
        {clientName},
        <br />
        <span className={css['client-title']}>
          {clientTitle} {company}
        </span>
      </p>
    </div>
  );
};

export default ClientStory;
