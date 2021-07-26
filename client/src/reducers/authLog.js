let userState

//If it has the userState in the local storage, redux will take that state and will assign to state
if (window.localStorage.getItem('auth')) {
  userState = JSON.parse(window.localStorage.getItem('auth'))
} else {
  userState = null
}
//Reducer function which takes an state and an action and returns an object. Like increment
export const authenticationReducer = (state = userState, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }
}
