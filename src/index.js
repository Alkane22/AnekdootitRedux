import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

//Styles
import './styles/Anecdote.css'
import './styles/NewAnecdote.css'
import './styles/General.css'
import './styles/VisibilityFilter.css'
import './styles/Notification.css'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})
/*
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})


const store = createStore(reducer)
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)