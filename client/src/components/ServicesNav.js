//we import link from router dom to link a component to other pages
import { Link } from 'react-router-dom'

const ServicesNav = () => {
  const active = window.location.pathname
  console.log(active)
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item col-6 text-center">
        <Link
          className={`nav-link ${active === '/services' && 'active'}`}
          to="/services"
        >
          Your bookings
        </Link>
      </li>
      <li className="nav-item col-6 text-center">
        <Link
          className={`nav-link ${active === '/services/owner' && 'active'}`}
          to="/services/owner"
        >
          Your items
        </Link>
      </li>
    </ul>
  )
}

export default ServicesNav
