//Funtions to post and get data
import axios from 'axios'

//send the data to create a new item
export const createItem = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-item`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//function to get the list of the items
export const listOfItems = async () =>
  await axios.get(`${process.env.REACT_APP_API}/items`)

// export const diffDays = (from, to) => {
//   const day = 24 * 60 * 60 * 1000
//   const start = new Date(from)
//   const end = new Date(to)
//   const difference = Math.round(Math.abs((start - end) / day))
//   return difference
// }

export const sellerItems = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/seller-items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//function that will make request to the API to delete an item
export const deleteItem = async (token, itemId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-item/${itemId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//function to retrieve a single item
export const read = async (itemId) =>
  await axios.get(`${process.env.REACT_APP_API}/item/${itemId}`)

//send the data to update data of an item, it makes a put request
export const updateItem = async (token, data, itemId) =>
  await axios.put(`${process.env.REACT_APP_API}/update-item/${itemId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//fc to make the request to get all items request
export const userItemBookings = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user-item-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
