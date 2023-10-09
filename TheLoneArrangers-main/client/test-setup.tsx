import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { routes } from './router.tsx'

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp(location: string) {
  const user = userEvent.setup()
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  const container = render(<RouterProvider router={router} />)
  return { user, ...container }
}

// EXTRA STUFF TO DO IN ORDER TO GET JEST-DOM TO WORK //

//npm i -D \
// vite@latest \
// vitest@latest \
// @vitejs/plugin-react@latest \
// @testing-library/react@latest \
// @testing-library/jest-dom@latest
