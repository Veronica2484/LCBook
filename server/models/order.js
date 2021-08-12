import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema(
  {
    item: {
      type: ObjectId,
      ref: 'Item',
    },
    session: {},
    orderedBy: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

//export to use it in controllers
export default mongoose.model('Order', orderSchema)
