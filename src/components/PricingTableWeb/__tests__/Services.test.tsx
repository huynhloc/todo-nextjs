import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Services from '../Services';
import { PLAN_OPTIONS } from 'constants/pricingTable';

afterEach(cleanup);

describe('Services component', () => {
  test('it should snapshot', () => {
    let selectedPlan = PLAN_OPTIONS[0];
    const onClick = () => {
      selectedPlan = PLAN_OPTIONS[1];
    };

    const { container } = render(
      <Services selectedPlan={selectedPlan} onClick={onClick} />
    );
    expect(container).toMatchSnapshot();
  });
});
