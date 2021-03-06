import expressJwt from 'express-jwt'
import Item from '../models/item'

//it requireSignin fc will be aplied to any route which will be protected
export const requireSignin = expressJwt({
  // it will check the secret, expiryDate from the token generated in the login fc
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})

//check if the owner of the item wants to delete it
export const itemOwner = async (req, res, next) => {
  let item = await Item.findById(req.params.itemId).exec()
  let owner = item.owner._id == req.user._id
  //let owner = item.owner._id.toString() === req.user._id.toString();
  if (!owner) {
    return res.status(403).send('Unauthorized')
  }
  next()
}
