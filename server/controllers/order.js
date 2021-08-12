import Item from '../models/item'
import User from '../models/user'
import Order from '../models/order'
import fs from 'fs'

export const createOrder = async (req, res) => {
  //to confirm in the console that the request is done to the correct endpoint
  //console.log('Order added')
  try {
    //get the Item id
    const { itemId } = req.body
    //find logged user
    const user = await User.findById(req.user._id)
    //check if the order exist
    const orderExist = await Order.findOne({ itemId: itemId, user: user })
    if (orderExist) {
      res.json({ success: true })
    } else {
      //create the order
      let newOrder = await new Order({
        item: itemId,
        orderedBy: user._id,
      }).save()
      //send the response to the user
      res.json({ success: true })
    }
  } catch (err) {
    console.log('Error creating the order', err)
  }
}
