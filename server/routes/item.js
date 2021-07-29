//import express
import express from 'express'

//import formidable to get the fields and files in the endpoint
import formidable from 'express-formidable'

//this gives access to express router
const router = express.Router()

//middleware
import { requireSignin } from '../middlewares'
//controllers
//import create function from item controller, which will be used to create a new item
import { create, items, image, sellerItems } from '../controllers/item'

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

export default router
module.exports = router
