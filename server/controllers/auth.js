// export const showMessage = (req, res) => {
//   //express is like a request response handler
//   //We can embedded variables ('Here is your message: ${req.params.message}')
//   res.status(200).send(`Here is your message:  ${req.params.message}`) //it statement should have single `` no ""
// }

//import the user model

import User from '../models/user'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    //as the app receives the data in JSON format, it is needed to apply a milddleware in order to be able to read it
    console.log(req.body)
    const { name, email, password } = req.body
    //validate name and password
    if (!name) return res.status(400).send('Name is required')
    if (!password || password.length < 6)
      return res
        .status(400)
        .send('Password is required and minimun 6 char long')
    let userExist = await User.findOne({ email }).exec()
    if (userExist) return res.status(400).send('Email already exist')
    //register the new user based in the data from the schema
    const user = new User(req.body)
    await user.save()
    console.log('Registration successfull', user)
    //response to send
    return res.json({ ok: true })
  } catch (err) {
    console.log('Registration failed', err)
    return res.status(400).send('Error. Please register again ')
  }
}

export const login = async (req, res) => {
  //to see if it gets the data
  //console.log(req.body)
  //verify if the email exist in the database
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email }).exec()
    //console.log('User exist', user)
    //is the user does not exist, it will send status 400 and a message of not found
    if (!user) res.status(400).send('User account not found')
    //if the user exist the app will compare password
    user.comparePassword(password, (err, match) => {
      console.log('Compare password in login err', err)
      if (!match || err) return res.status(400).send('Wrong password')
      //console.log('Generate a token then send as response to client')
      //Generate token, first arguments is the payload data, second arg is the secret varible
      //third argument expire date
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })
      res.json({
        token,
        //choose what fields it will send as a response, otherwise, it will send the password
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      })
    })
  } catch (err) {
    console.log('Login error', err)
    res.status(400).send('Signin failed')
  }
}
