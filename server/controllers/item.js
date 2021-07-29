import Item from '../models/item'
import fs from 'fs'

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
  let all = await Item.find({})
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
