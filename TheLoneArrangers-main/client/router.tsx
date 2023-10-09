import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './components/App'
import InputForm from './components/InputForm'
import WriteStory from './components/WriteStory'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route path="inputform" element={<InputForm />} />
      <Route path="madlib" element={<WriteStory />} />
    </Route>
  </Route>
)

export const router = createBrowserRouter(routes)
