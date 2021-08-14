// import express into a variable it is equal to impor from in React

//path for deployment
import path from 'path'
//npm esm package allows to import and export components easily
//after install esm
//const express = require('express') we can change this importation to the import way
import express from 'express'
//the express server is storaged in the app variable
//import router from './routes/auth'

//import a module from FS(filesystem) to import all the components inside
//of the routes folder which will make it easier to work with the next files
//import fs from 'fs'
//We import a specific fc readdirSync instead to import all fs
import { readdirSync } from 'fs'
//to make request between different ports
import cors from 'cors'
import mongoose from 'mongoose'
const bodyParser = require('body-parser')
//HTTP request logger middleware. To print routes with the end point request and response
const morgan = require('morgan')
require('dotenv').config()

//const app. it´s a fc that represents the express module
const app = express()

//MongoDB connection
mongoose
  .connect(process.env.DATABASEBOOK, {
    //we pass as a second argument of the fc these configuration options to avoid some warnings in the console
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('BD Connected'))
  //catch the error connection
  .catch((err) => console.log('DB ConnectionErro : ', err))

//middlewares
//(CORS)Cross-Origin Resource Sharing. To make requests
app.use(cors())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
//middleware to parse the JSON data that the app receives as a request
app.use(express.json()) /
  //I added it to parse the data generated by axios
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )

app.use(bodyParser.json())

//to run a router we need to use a middleware, that is a fc that runs on the middle
//sync fc will automatically load others routes from the routes folder.
//fs.readdirSync('./routes').map((r) => app.use('api/', require(`./routes/${r}`)))
const __dirname = path.resolve()
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

// const file = fs.readFileSync("../file.xml");
// const path = require("path");
// const file = fs.readFileSync(path.resolve(__dirname, "../file.xml"));
//route middleware
//app.use('/api', router)

//condition for deployment

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('App running')
  })
}

//Once I create an .env doc I have access to the port variable from it
//the port variable will allow our server to listen the local port 8000 and the cloud host port system, like Heroku port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
