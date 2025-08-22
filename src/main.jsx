import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { RouterProvider } from 'react-router'
import Layout  from './components/Layout.jsx'
import router from './components/Router.jsx'
import AuthContextWrapper from './components/AuthContextWrapper.jsx'
import React from 'react'

import './index.css'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AuthContextWrapper>
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  </AuthContextWrapper>
  </Provider>
  
)
