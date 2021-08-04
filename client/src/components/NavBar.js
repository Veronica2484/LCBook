//we import link from router dom to link a component to other pages
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import a hook to use the history function and route to pass a render as a prop
import { Route, useHistory } from 'react-router-dom'
import SearchBox from './forms/SearchBox'

//after we import BrowserRouter we need to wrap the routers
//we have to add exact in order to retrieve the exact page otherwise will retrieve the first coincidence even though the rest of the path does not match
//add a navigation bar to navigate around the application

const NavBar = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => ({ ...state }))
  const history = useHistory()

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    window.localStorage.removeItem('auth')
    //push the user to the login once it is logged out
    history.push('/login')
  }

  return (
    <div className="nav d-flex justify-content-between col-sm text-center">
      <img
        src="/logo.png"
        width="10%"
        height="10%"
        alt=""
        className="img img-fluid m-2"
      />

      <Route render={({ history }) => <SearchBox history={history} />} />

      <Link className="nav-link  m-4" to="/">
        Home
      </Link>

      {auth !== null && (
        <Link className="nav-link  m-4 " to="/services">
          Services
        </Link>
      )}

      {auth !== null && (
        //add the pointer class to add a pointer to the logout function
        <href className="nav-link pointer  m-4 " onClick={logout}>
          Logout
        </href>
      )}

      {auth === null && (
        <>
          {''}
          <Link className="nav-link m-4 " to="/login">
            Login
          </Link>
          <Link className="nav-link m-4" to="/register">
            Register
          </Link>
          {''}
        </>
      )}
    </div>
  )
}

export default NavBar
