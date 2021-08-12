import mongoose from 'mongoose'
//library to hash the password before save it and to compare password
import bcrypt from 'bcrypt'
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    email: {
      type: String,
      trim: true,
      required: 'Email is required',
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    // stripe_account_id: '',
    // stripe_seller: {},
    // stripeSession: {},
  },
  //this second argument creates two fields in the database, create and update
  { timestamps: true }
)

//hash the password entered by the user the first time or when it is updated
//middleware
userSchema.pre('save', function (next) {
  let user = this //use this, otherwise, each time of the password is updated it will be automatically changed and the user will have to use the new password to login

  if (user.isModified('password')) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log('Bcrypt error', ERR)
        return next(err)
      }
      user.password = hash
      return next()
    })
  } else {
    return next
  }
})

//method to compare password, we should hast it first and compare it with what is stored in the database
userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log('Compare password err', err)
      return next(err, false)
    }
    //if there is not error we got null
    console.log('Match password', match)
    return next(null, match)
  })
}

//export to use it in controllers
export default mongoose.model('User', userSchema)
