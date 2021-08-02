import express from 'express'

const router = express.Router()

// middleware
import { requireSignin } from '../middlewares'
// controllers
import { createOrder } from '../controllers/order'

router.post('/create-order', requireSignin, createOrder)

//route for order Schema

export default router
module.exports = router
