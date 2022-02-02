import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { App } from '../App.jsx'

test('hello word', () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello fashion/i)
  expect(linkElement).toBeInTheDocument()
})
