import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './reducers/store'

//Styles
import './styles/Anecdote.css'
import './styles/NewAnecdote.css'
import './styles/General.css'
import './styles/VisibilityFilter.css'
import './styles/Notification.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)