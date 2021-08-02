import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createOrder } from '../actions/order'
import { LoadingOutlined } from '@ant-design/icons'

const CheckOut = ({ match, history }) => {
  // const {
  //   auth: { token, user },
  // } = useSelector((state) => ({ ...state }))

  // useEffect(() => {
  //   console.log('here we are', match.params.itemId + user.name)
  // }, [match.params.itemId])

  //add the response that it gets from effect in a state
  const [item, setItem] = useState({})

  const {
    auth: { token, user },
  } = useSelector((state) => ({ ...state }))
  //another way to access to the token state
  //const {token} = auth

  useEffect(() => {
    //console.log('Send this to create an order', match.params.itemId + user.name)
    createOrder(token, match.params.itemId).then((res) => {
      if (res.data.success) {
        //console.log('Success response', res.data)
        history.push('/services')
      } else {
        res.send('The booking was not successfule, try again')
      }
    })
  }, [match.params.itemId])

  return (
    <>
      <div className="container-fluid">
        <div className="col text-center">
          {/* <br />
            <p className="card-text">ID: {match.params.itemId}</p>
            <p className="card-text">Ordered By: {user.name}</p> */}
          <LoadingOutlined className="display-1 text-danger" />
        </div>
      </div>
    </>
  )
}

export default CheckOut
