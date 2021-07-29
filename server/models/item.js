import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = mongoose.Schema

const itemSchema = new Schema(
  {
    itemTitle: {
      type: String,
      required: 'Title is required',
    },
    author: {
      type: String,
      required: 'Author is required',
    },
    city: {
      type: String,
      required: 'City is required',
    },
    status: {
      type: String,
      required: 'Status is required',
    },
    price: {
      type: Number,
      required: 'Price is required',
      trim: true,
    },
    owner: {
      type: ObjectId,
      ref: 'User',
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Item', itemSchema)
