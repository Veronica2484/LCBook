import { useState, useEffect } from 'react'
import React from 'react'
import { read } from '../actions/item'
import { useSelector } from 'react-redux'

const ViewItem = ({ match, history }) => {
  //add the response that it gets from effect in a state
  const [item, setItem] = useState({})
  const [image, setImage] = useState('')

  const { auth } = useSelector((state) => ({ ...state }))
  useEffect(() => {
    loadSellerItem()
  }, [])

  const loadSellerItem = async () => {
    //it will make a request using read fc
    let res = await read(match.params.itemId)
    //console.log(res)
    setItem(res.data)
    setImage(`${process.env.REACT_APP_API}/item/image/${res.data._id}`)
    console.log(res.data)
  }

  //function to readress an user not logged
  const handleClick = async (e) => {
    e.preventDefault()

    //Add tje return keyword so the rest of the code does not execute when the user is readdress to login
    if (!auth || !auth.token) {
      history.push('/login')
      return
    }
    if (auth) history.push(`/booking/checkout/${match.params.itemId}`)
    //console.log('you are here')
  }

  return (
    <>
      <div className="container-fluid services p-5 text-center">
        <h2>{item.itemTitle}</h2>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <b>{item.content}</b>
            <p className="alert alert-info">Author: {item.author}</p>
            <p className="alert alert-info">City: {item.city}</p>
            <p className="card-text">To: {item.status}</p>
            <p className="card-text"> Quantity: {item.quantity}</p>
            <p className="card-text"> Price: {item.price}</p>
            <div className="col-md-4">
              {item.from && item.to ? (
                <>
                  <p className="card-text">
                    Available from {new Date(item.from).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    Available to {new Date(item.to).toLocaleDateString()}
                  </p>
                </>
              ) : (
                <p className="card-text">{``}</p>
              )}
            </div>
            <br />
            <i>Posted by {item.owner && item.owner.name}</i>
            <br />
            <button
              onClick={handleClick}
              className="btn btn-block btn-lg btn-primary mt-3"
            >
              {auth && auth.token ? 'Book Now' : 'Login to book'}
            </button>
          </div>

          <div className="col-md-6">
            <br />
            <img
              src={image}
              alt={item.itemTitle}
              className="img img-fluid m-2"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewItem
