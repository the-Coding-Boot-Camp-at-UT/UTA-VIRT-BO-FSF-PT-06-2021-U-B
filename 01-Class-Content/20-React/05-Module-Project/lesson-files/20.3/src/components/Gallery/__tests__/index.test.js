// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery component', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('renders', () => {
  const { getByTestId } = render(<Gallery currentCategory={portrait} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})