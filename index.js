/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */

import React from 'react'
import { render } from 'react-dom'
import App from './App'

const root = document.getElementById('root')

render(<App />, root)