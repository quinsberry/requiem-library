import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { resources } from './localization'

import App from './App'

import store from './redux/store'

import './index.scss'

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
