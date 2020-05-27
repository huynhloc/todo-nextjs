import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container';

describe('Container Component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Container>Container Component</Container>);
    expect(container).toMatchSnapshot();
  });
});
