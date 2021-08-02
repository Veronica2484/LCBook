//Funtions to post and get data
import axios from 'axios'

//send the data to create a new item
export const createOrder = async (token, itemId) =>
  await axios.post(
    `${process.env.REACT_APP_API}/create-order`,
    { itemId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
