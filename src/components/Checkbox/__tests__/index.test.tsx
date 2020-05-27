import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Checkbox from '../Checkbox';

afterEach(cleanup);

describe('Checkbox Component', () => {
  test('should match Checkbox snapshot', () => {
    const { container } = render(
      <>
        <Checkbox label="label">text 1</Checkbox>
        <Checkbox label="label">
          <div>text 2</div>
        </Checkbox>
        <Checkbox label="label" defaultChecked>
          text 3
        </Checkbox>
        <Checkbox label="label" disabled>
          text 4
        </Checkbox>
        <Checkbox label="label" disabled defaultChecked>
          text 5
        </Checkbox>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
