import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Slider from '../Slider';

afterEach(cleanup);

describe('Slider Component', () => {
  test('Slider should match snapshot', () => {
    const { container } = render(
      <Slider>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Slider>
    );
    expect(container).toMatchSnapshot();
  });
});
