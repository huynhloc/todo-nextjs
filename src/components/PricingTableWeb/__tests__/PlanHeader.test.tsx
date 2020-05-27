import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { STARTUP } from 'constants/pricingTable';
import PlanHeader from '../PlanHeader';

afterEach(cleanup);

describe('PlanHeader component', () => {
  test('it should snapshot', () => {
    const { container } = render(
      <>
        <PlanHeader planKey={STARTUP} isPlanSelected={false} />
        <PlanHeader planKey={STARTUP} isPlanSelected={true} />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
