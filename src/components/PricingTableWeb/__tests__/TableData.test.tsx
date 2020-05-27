import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Checked from 'assets/icons/ic-checked.svg';
import { TEXT, WHITE, GRAY } from 'constants/pricingTable';
import TableData from '../TableData';

afterEach(cleanup);

describe('Table data component', () => {
  test('it should match snapshot with string data', () => {
    const { container } = render(
      <>
        <TableData data={'Text'} type={TEXT} theme={WHITE} />
        <TableData data={'Text'} type={TEXT} theme={GRAY} />
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should math snapshot with svg icon', () => {
    const { container } = render(
      <>
        <TableData data={Checked} type={TEXT} theme={WHITE} />
        <TableData data={Checked} type={TEXT} theme={GRAY} />
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('it should math snapshot with null data', () => {
    const { container } = render(
      <>
        <TableData data={null} type={TEXT} theme={WHITE} />
        <TableData data={null} type={TEXT} theme={GRAY} />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
