import ServicesNav from '../components/ServicesNav'
import Connect from '../components/Connect'
import { Link } from 'react-router-dom'
import { userItemBookings } from '../actions/item'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import BookingCard from '../components/cards/BookingCard'

const Services = () => {
  //access to the token from auth state
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }))
  //create state for bookings
  const [booking, setBooking] = useState([])

  const loadUserBookings = async () => {
    try {
      const res = await userItemBookings(token)
      setBooking(res.data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadUserBookings()
  }, [])

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

      <div className="row">
        {booking.map((b) => (
          <BookingCard key={b._id} item={b.item} orderedBy={b.orderedBy} />
        ))}
      </div>
    </>
  )
}

export default Services
