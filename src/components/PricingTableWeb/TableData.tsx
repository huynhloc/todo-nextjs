import React from 'react';
import cx from 'classnames';
import { RowDataType, theme } from 'types/pricingTable';
import { TEXT, WHITE } from 'constants/pricingTable';
import css from './PricingTableWeb.scss';

type TableDataProps = {
  data: string | SvgrComponent | null;
  type: RowDataType;
  theme?: theme;
  isHeader?: boolean;
  isService?: boolean;
};

const TableData: React.FC<TableDataProps> = ({
  data,
  type = TEXT,
  theme = WHITE,
  isHeader,
  isService,
}) => {
  const containerClassName = cx(
    css['data-container'],
    css[`data-container--${theme}`],
    {
      [css['service-container']]: isService,
      [css['service-header-container']]: isHeader,
    }
  );
  const textContentClass = cx(css['data'], {
    [css['service-name']]: isService,
    [css['service-header-name']]: isHeader,
  });

  if (!data) {
    return <div className={containerClassName} />;
  }

  if (type === TEXT) {
    return (
      <div className={containerClassName}>
        <p className={textContentClass}>{data}</p>
      </div>
    );
  } else {
    const Icon = data as SvgrComponent;
    return (
      <div className={containerClassName}>
        <Icon className={css['data-icon']} />
      </div>
    );
  }
};

export default TableData;
