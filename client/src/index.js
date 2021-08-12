//this file is what our application is, because it render the App component which contains
//the rest of the functionalities components

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import rootReducer from './reducers'
/*
Redux
Store, 
Action, function that returns an object
Reducer,
Dispatch
 */
//import from react-redux and redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//Redux Store. Glabalized state. Holds all the data for the application
const store = createStore(rootReducer, composeWithDevTools())

//ReactDOM is rendering the App component. This components has
//provide redux store to the entire app, wrapping the App component
//With the redux application it will able to access the state and
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
