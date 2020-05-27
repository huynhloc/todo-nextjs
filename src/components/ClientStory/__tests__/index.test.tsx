import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ClientStory from '../ClientStory';
import Client2 from 'assets/images/client2.jpg';

afterEach(cleanup);

const client = {
  avatar: Client2,
  clientName: 'Christina',
  clientTitle: 'Product Designer',
  company: 'company',
  clientQuote:
    'Amet rhoncus commodo san, sagittis enim. Porttitor in cursus eu amet sit.',
};

describe('Slider Component', () => {
  test('Slider should match snapshot', () => {
    const { container } = render(<ClientStory client={client} />);
    expect(container).toMatchSnapshot();
  });
});
