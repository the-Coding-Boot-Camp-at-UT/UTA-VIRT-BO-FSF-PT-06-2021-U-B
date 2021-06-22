// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from './PhotoList'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  });
});
