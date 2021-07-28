import ServicesNav from '../components/ServicesNav'
import Connect from '../components/Connect'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="container-fluid p-5 text-center services">
        <h1>Services</h1>
        <Connect />
      </div>

      <div className="container-fluid p-4">
        <ServicesNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your booked items</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Show list of Books
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
