import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from '../src/layouts/DashboardLayout'
import LoginView from '../src/views/auth/LoginView'
import NotFoundView from '../src/views/errors/NotFoundView'
import RegisterView from '../src/views/auth/RegisterView'
import DashboardView from '../src/views/reports/DashboardView'

import {
  generatePagesRoutes,
  DefaultLoginView,
  ResetPassword,
  SignupWithEmail,
  ErrorBoundary
} from '@iteria-app/component-templates'
import * as generatedGraphql from './generated/graphql'

const filebasedRouting = import.meta.globEager('./pages/**/*.tsx')
const DETAIL_NAME = 'Form'
const ONE_PAGE = '[id]'
const MANY_PAGE = 'index'

const newRoutes = Object.keys(filebasedRouting).map((route) => {
  let path = route
    .replace(/\/pages|\.tsx$/g, '')
    .replace(/(\.\/|\/.*)/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')
  const Container =
    filebasedRouting[route].default ??
    filebasedRouting[route][0] ??
    filebasedRouting[route]
  path = route.includes(ONE_PAGE) ? path + '/:id/' : path
  return {
    path,
    element: (
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    )
  }
})

const routing = generatePagesRoutes(generatedGraphql)
routing.push({ path: 'dashboard', element: <DashboardView /> })

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: routing
  },
  {
    path: 'test',
    element: <DashboardLayout />,
    children: newRoutes
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'login', element: <DefaultLoginView /> },
      { path: 'resetpassword', element: <ResetPassword /> },
      { path: 'signup', element: <SignupWithEmail /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <NotFoundView /> }
    ]
  }
]

export default routes
