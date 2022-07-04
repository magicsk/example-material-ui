import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {
  ErrorBoundary,
  LocaleContextProvider,
  ThemeContextProvider
} from '@iteria-app/component-templates'
import './index.css'

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <LocaleContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </LocaleContextProvider>
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
)
