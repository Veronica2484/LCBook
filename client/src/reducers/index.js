//in this file all the reducers will be combine
import { combineReducers } from 'redux'
import { authenticationReducer } from './authLog'

//3. combine multiple reducers
const rootReducer = combineReducers({
  auth: authenticationReducer,
})

export default rootReducer
