//2.Reducer function which takes an state and an action and returns an object. Like increment
export const authenticationReducer = (
  state = { name: 'James', role: 'marketing' },
  action
) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }
}
