import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PLAN_OPTIONS } from 'constants/pricingTable';
import Plans from '../Plans';

afterEach(cleanup);

describe('Plans component', () => {
  test('it should snapshot', () => {
    let selectedPlan = PLAN_OPTIONS[0];
    const onClick = () => {
      selectedPlan = PLAN_OPTIONS[1];
    };

    const { container } = render(
      <Plans selectedPlan={selectedPlan} onClick={onClick} />
    );
    expect(container).toMatchSnapshot();
  });
});
