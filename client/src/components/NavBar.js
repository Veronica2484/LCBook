//we import link from router dom to link a component to other pages
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import a hook to use the history function
import { useHistory } from 'react-router-dom'

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

      <Link className="nav-link " to="/">
        Home
      </Link>

      {auth !== null && (
        <Link className="nav-link " to="/services">
          Services
        </Link>
      )}

      {auth !== null && (
        //add the pointer class to add a pointer to the logout function
        <href className="nav-link pointer  " onClick={logout}>
          Logout
        </href>
      )}

      {auth === null && (
        <>
          {''}
          <Link className="nav-link " to="/login">
            Login
          </Link>
          <Link className="nav-link " to="/register">
            Register
          </Link>
          {''}
        </>
      )}
    </div>
  )
}

export default NavBar
