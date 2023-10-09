//@vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { renderApp } from '../../test-setup'
import { screen, render } from '@testing-library/react'
import InputForm from '../InputForm'
import userEvent from '@testing-library/user-event'
import * as data from '../../../data/storyData'
import App from '../App'

// TEST TEXT ON HOMEPAGE //
describe('Home page', () => {
  it('has the correct title', () => {
    // can't do this as we don't have a title
    // ARRANGE
    render(<App />)

    // ACT

    // EXPECT
    const current = screen.getByRole('heading', { level: 1 }) // or whatever is above form // check role
    expect(current).toHaveTextContent('A Surrogate Title')
  })

  it('has an adjective in the submit form', () => {
    // ARRANGE
    render(<App />)

    // ACT

    // EXPECT
    const current = screen.getByRole('button', { name: /text button/ }) // need to aria-label button to be 'submit', also good for accessibility
    expect(current).toHaveTextContent('submit')
  })
})

// TEST WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED // might have an issue with this one, as need form filled? need to mock that?

describe('madlib page', () => {
  // it('puts form inputs into story', async () => {
  //   vi.mocked(data.StoryData).mockImplementation(async () => {
  //     return // want this return to be the mocked array of form inputs
  //   })

  //   const current = screen.getByText(/aragorn/)
  //   expect(current).toHaveTextContent('aragorn')
  // })

  it('shows me some kinda story', () => {
    const screen = renderApp('/madlib')

    const para = screen.getByText(/comically chaotic challenges/)
    expect(para).toBeVisible()
  })
})

it('produces a madlib story when form submitted', async () => {
  // ARRANGE
  const user = userEvent.setup()
  render(<InputForm />)

  // ACT
  const button = screen.getByRole('button', { name: 'Submit' })
  await user.click(button)

  const current = screen.getByText(/comically chaotic challenges/)
  expect(current).toHaveTextContent('comically chaotic challenges ')
})
