import Item from '../models/item'
import fs from 'fs'
import Order from '../models/order'
import User from '../models/user'

export const create = async (req, res) => {
  //to confirm in the console that the request is done to the correct endpoint
  //console.log('Item added')
  //console.log('req.fields', req.fields)
  //console.log('req.files', req.files)
  //create a new Item
  try {
    let fields = req.fields
    let files = req.files
    // if (!itemTitle) return res.status(400).send('itemTitle is required')
    // if (!author) return res.status(400).send('author is required')
    //instance of the new Item
    let item = new Item(fields)
    item.owner = req.user._id
    //read files
    if (files.image) {
      item.image.data = fs.readFileSync(files.image.path)
      item.image.contentType = files.image.type
    }
    item.save((err, result) => {
      if (err) {
        console.log('Error adding new item =>', err)
        res.status(400).send('Failed saving')
      }
      //data saved in the database and send as a JSON response
      res.json(result)
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      err: err.message,
    })
  }
}

export const items = async (req, res) => {
  //create a variable called keyword to check if the keyword if found
  const keyword = req.query.keyword
    ? {
        itemTitle: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  //to filter the item from today on
  //let all = await Item.find({ from: { Sgte: new Date() } })
  let all = await Item.find({ ...keyword })
    .limit(24)
    .select('-image.data')
    .populate('owner', '_id name')
    .exec()
  //console.log(all)
  res.json(all)
}

export const image = async (req, res) => {
  let item = await Item.findById(req.params.itemId).exec()
  if (item && item.image && item.image.data !== null) {
    res.set('Content-Type', item.image.contentType)
    return res.send(item.image.data)
  }
}

//create the sellerItems function
export const sellerItems = async (req, res) => {
  let all = await Item.find({ owner: req.user._id })
    .select('-image.data')
    .populate('owner', '_id name')
    .exec()

  res.send(all)
}

export const remove = async (req, res) => {
  let removed = await Item.findByIdAndDelete(req.params.itemId)
    .select('-image.data')
    .exec()
  res.json(removed)
}

//read function to get information from a single item
export const read = async (req, res) => {
  let item = await Item.findById(req.params.itemId)
    .populate('owner', '_id name')
    .select('-image.data')
    .exec()
  console.log('Single Item', item)
  res.json(item)
}

export const update = async (req, res) => {
  try {
    let fields = req.fields
    let files = req.files

    let data = { ...fields }

    if (files.image) {
      let image = {}
      image.data = fs.readFileSync(files.image.path)
      image.contentType = files.image.type

      data.image = image
    }
    let updated = await Item.findByIdAndUpdate(req.params.itemId, data, {
      new: true,
    }).select('-image.data')
    res.json(updated)

    //combine fields and files and put in a variable
  } catch {
    console.log(err)
    res.status(400).send('Item update failed. Please try again')
  }
}

//create a fc to display list of items
// export const userItemBookings = async (req, res) => {
//   //add in a varible all the items ordered by an user getting them by userId
//   const all = await User.findById(req.user._id)
//     .select('_id')
//     .populate('item', '-image.data')
//     .populate('orderedBy', 'id name')
//     .exec()
//   res.json(all)
// }

//create a fc to display list of items
export const userItemBookings = async (req, res) => {
  const all = await Order.find({ orderedBy: req.user._id })
    .select('orderedBy')
    .populate('item', '-image.data')
    .populate('orderedBy', '_id name')
    .exec()
  res.json(all)
}

//fc to check if an item is already booked
export const isItemAlreadyBooked = async (req, res) => {
  const { itemId } = req.params
  //retrieve items order of the current logged user
  const userOrders = await Order.find({ orderedBy: req.user._id })
    .select('item')
    .exec()

  //check if item id is found in userOrders array
  let ids = [] //push order of the user in this array and then check if an itemId is found there
  for (let i = 0; i < userOrders.length; i++) {
    ids.push(userOrders[i].item.toString())
  }
  res.json({
    //this will check if an itemId is included in the ids orders array, it will give true or false
    ok: ids.includes(itemId),
  })
}

//fc to listing the searched items
export const searchListings = async (req, res) => {
  const { city, date } = req.body
  //to see in the console the res
  console.log(city, date)
  let result = await Item.find({ from: { $gte: new Date() }, city })
    .select('-image.data')
    .exec()
  res.json(result)
}
