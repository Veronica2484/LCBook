//Funtions to post and get data
import axios from 'axios'

//send the data to create a new item
export const createItem = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-item`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//function to get the list of the items,
//add the keyword an set as default empty to add the funtionality search, pass the query string on the route
export const listOfItems = async (keyword = '') =>
  await axios.get(`${process.env.REACT_APP_API}/items?keyword=${keyword}`)

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

//fc to make a request to check if a item is already booked. It twill pass the itemId in the URL
export const isItemAlreadyBooked = async (token, itemId) =>
  await axios.get(`${process.env.REACT_APP_API}/is-already-booked/${itemId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

//fc to make a request to search for item
export const searchListings = async (query) =>
  await axios.post(`${process.env.REACT_APP_API}/search-listings`, query)

//fc to make a request to check if a item is already booked. It twill pass the itemId in the URL
// export const isItemBooked = async (itemId) =>
//   await axios.get(`${process.env.REACT_APP_API}/is-item-booked/${itemId}`)
