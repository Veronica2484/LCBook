//import express
import express from 'express'

//this gives access to express router
const router = express.Router()

//this function takes two arguments, the URL and the callbakc fc that has the request and response object
//controllers
import { register, login } from '../controllers/auth'

// we take the second argument and put a show message variable which will be in auth.js controller file
//router.get('/:message', showMessage)
//create endpoint which will receive post request from the client
router.post('/register', register)
//create the route for the login request
router.post('/login', login)

export default router
module.exports = router
