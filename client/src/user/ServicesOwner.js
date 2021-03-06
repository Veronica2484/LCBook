import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ServicesNav from '../components/ServicesNav'
import Connect from '../components/Connect'
import { Link } from 'react-router-dom'
import { sellerItems, deleteItem } from '../actions/item'
import SmallCard from '../components/cards/SmallCard'
import { toast } from 'react-toastify'

const ServicesOwner = () => {
  const { auth } = useSelector((state) => ({ ...state }))
  const [items, setItems] = useState([])
  // //to display a loading state when the user makes a request to set up an account
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadSellerItems()
  }, [])

  const loadSellerItems = async () => {
    let { data } = await sellerItems(auth.token)
    setItems(data)
  }

  const handleItemDelete = async (itemId) => {
    if (!window.confirm('Do you want to delete it?')) return
    deleteItem(auth.token, itemId).then((res) => {
      toast.success('Item deleted')
      loadSellerItems()
    })
  }

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
            <h2>Your own items</h2>
          </div>
          <div className="col-md-2">
            <Link to="/items/new" className="btn btn-primary">
              Add new item
            </Link>
          </div>
        </div>
        <div className="row">
          {items.map((h) => (
            <SmallCard
              key={h._id}
              h={h}
              showViewMoreButton={false}
              owner={true}
              handleItemDelete={handleItemDelete}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ServicesOwner
