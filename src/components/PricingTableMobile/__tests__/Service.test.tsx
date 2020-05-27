import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  STARTUP,
  PLAN_SERVICES,
  SERVICE_LISTING,
  SERVICES,
  VERIFIED_PROFILE,
  RECEIVE_RESPOND_INQUIRIES,
  CUSTOMER_SERVICE,
  PERSONALISED_CUSTOMER_SERVICE,
} from 'constants/pricingTable';
import Service from '../Service';

afterEach(cleanup);

describe('Service Component', () => {
  test('it should match snapshot', () => {
    const { container } = render(
      <>
        <Service
          service={SERVICES[SERVICE_LISTING]}
          planServices={PLAN_SERVICES[STARTUP]}
        />
        <Service
          service={SERVICES[VERIFIED_PROFILE]}
          planServices={PLAN_SERVICES[STARTUP]}
        />
        <Service
          service={SERVICES[RECEIVE_RESPOND_INQUIRIES]}
          planServices={PLAN_SERVICES[STARTUP]}
        />
        <Service
          service={SERVICES[CUSTOMER_SERVICE]}
          planServices={PLAN_SERVICES[STARTUP]}
        />
        <Service
          service={SERVICES[PERSONALISED_CUSTOMER_SERVICE]}
          planServices={PLAN_SERVICES[STARTUP]}
        />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
