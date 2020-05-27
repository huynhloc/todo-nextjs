import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PLAN_OPTIONS } from 'constants/pricingTable';
import PlanDropdown from '../PlanDropdown';

afterEach(cleanup);

describe('PlanDropdown Component', () => {
  test('PlanDropdown should match snapshot', () => {
    const options = PLAN_OPTIONS;

    let value = options[0];
    const onChange = () => {
      value = options[1];
    };
    const { container } = render(
      <PlanDropdown value={value} options={options} onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
