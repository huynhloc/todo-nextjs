import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ClientStorySlider from '../ClientStorySlider';

afterEach(cleanup);

describe('Slider Component', () => {
  test('Slider should match snapshot', () => {
    const { container } = render(<ClientStorySlider />);
    expect(container).toMatchSnapshot();
  });
});
