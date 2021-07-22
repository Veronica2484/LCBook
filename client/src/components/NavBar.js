//we import link from router dom to link a component to other pages
import { Link } from 'react-router-dom'

//after we import BrowserRouter we need to wrap the routers
//we have to add exact in order to retrieve the exact page otherwise will retrieve the first coincidence even though the rest of the path does not match
//add a navigation bar to navigate around the application

const NavBar = () => (
  <div className="nav bg-light d-flex justify-content-between">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/register">
      Register
    </Link>
    <Link className="nav-link" to="/services">
      Services
    </Link>
    <Link className="nav-link" to="/maintain">
      Maintain
    </Link>
  </div>
)

export default NavBar
