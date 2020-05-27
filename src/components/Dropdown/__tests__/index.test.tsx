import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dropdown from '../Dropdown';

afterEach(cleanup);

describe('Dropdown Component', () => {
  test('Dropdown should match snapshot', () => {
    const options = [
      {
        value: 'value1',
        label: 'key1',
      },
      {
        value: 'value2',
        label: 'key2',
      },
    ];

    let value = options[0];
    const onChange = () => {
      value = options[1];
    };
    const { container } = render(
      <Dropdown value={value} options={options} onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
