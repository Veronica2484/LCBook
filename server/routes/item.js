//import express
import express from 'express'

//import formidable to get the fields and files in the endpoint
import formidable from 'express-formidable'

//this gives access to express router
const router = express.Router()

//middleware
import { requireSignin, itemOwner } from '../middlewares'
//controllers
//import create function from item controller, which will be used to create a new item
import {
  create,
  items,
  image,
  sellerItems,
  remove,
  read,
  update,
  userItemBookings,
  isItemAlreadyBooked,
  searchListings,
  // isItemBooked,
} from '../controllers/item'

//create endpoint which will receive post request from the client (same "create-item" that in actions/items.js file)
//apply formidable as a middleware in the router to receive the form data
//when this end point receives a request, first it will validate the JSON token, will get the fields and files from the form data
//and after that it will create the new item accessing to the item controller
router.post('/create-item', requireSignin, formidable(), create)
//get endpoint to get all the items
router.get('/items', items)
//create a route to display images
router.get(`/item/image/:itemId`, image)
//add a router to get the list of items of a user
router.get('/seller-items', requireSignin, sellerItems)
//create delete route
router.delete('/delete-item/:itemId', requireSignin, itemOwner, remove)
//end point to get a single item
router.get('/item/:itemId', read)
//router to update item
router.put(
  '/update-item/:itemId',
  requireSignin,
  itemOwner,
  formidable(),
  update
)

//create a route to display the items booked by an user
router.get('/user-item-bookings', requireSignin, userItemBookings)
//check if a item is already booked
router.get('/is-already-booked/:itemId', requireSignin, isItemAlreadyBooked)
//route to display the list of item searched
router.post('/search-listings', searchListings)

//check if a item is already booked to disable the book button
// router.get('/is-item-booked/:itemId', isItemBooked)

export default router
module.exports = router
