// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
})
