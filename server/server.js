// import express into a variable it is equal to impor from in React

//npm esm package allows to import and export components easily
//after install esm
//const express = require('express') we can change this importation to the import way

import express from 'express'
//the express server is storaged in the app variable
import router from './routes/auth'
//import a module from FS(filesystem) to import all the components inside
//of the routes folder which will make it easier to work with the next files
//import fs from 'fs'
//We import a specific fc readdirSync instead to import all fs
import { readdirSync } from 'fs'
import cors from 'cors'
import mongoose from 'mongoose'
const morgan = require('morgan')
require('dotenv').config()

const app = express()

//MongoDB conncetion
mongoose
  .connect(process.env.DATABASEBook, {
    //we pass as a second argument of the fc these configuration options to avoid some warnings in the
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('BD Connected'))
  //catch the error connection
  .catch((err) => console.log('DB ConnectionErro : ', err))

//milddlewares
app.use(cors())
app.use(morgan('dev'))
//to run a router we need to use a middleware, that is a fc that runs on the middle
//sync fc will automatically load others routes from the routes folder.
//fs.readdirSync('./routes').map((r) => app.use('api/', require(`./routes/{r}`)))
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))
//route middleware
//app.use('/api', router)

//Once I create an .env doc I have access to the port variable from it
const port = process.env.PORT || 8000

app.listen(8000, () => console.log('Server is running on port 8000'))
