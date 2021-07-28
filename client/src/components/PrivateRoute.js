import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }))
  //if the user has the auth then the app will return the rest of the props
  return auth && auth.token ? (
    <Route {...rest} />
  ) : (
    //otherwise, the user will be redirected to login
    <Redirect to="/login" />
  )
}

export default PrivateRoute
