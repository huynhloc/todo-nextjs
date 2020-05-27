import React from 'react';
import { render, cleanup } from '@testing-library/react';
import InactiveSlider from '../InactiveSlider';

afterEach(cleanup);

describe('InactiveSlider Component', () => {
  test('InactiveSlider should match snapshot', () => {
    const { container } = render(
      <InactiveSlider>
        <div>Slide a</div>
        <div>Slide b</div>
        <div>Slide c</div>
        <div>Slide d</div>
      </InactiveSlider>
    );
    expect(container).toMatchSnapshot();
  });
});
