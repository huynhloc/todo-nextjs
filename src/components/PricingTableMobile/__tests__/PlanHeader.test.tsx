import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { STARTUP } from 'constants/pricingTable';
import PlanHeader from '../PlanHeader';

afterEach(cleanup);

describe('PlanHeader Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(
      <>
        <PlanHeader planKey={STARTUP} isContentSelected />
        <PlanHeader planKey={STARTUP} isContentSelected={false} />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
