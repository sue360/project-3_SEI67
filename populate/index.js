import express from 'express'
import mongoose from 'mongoose' // mongoose allows our server to talk to our database
import router from './config/router.js'
import { } from 'dotenv/config'

// ! Variables
const app = express()

const startServer = async () => {
  try {
    // ! Connect to database
    await mongoose.connect(process.env.DB_URI)
    console.log('======= Database up and running =========')

    // ! Middleware
    // * PARSING JSON BODY TO REQ BODY AS JAVASCRIPT OBJECT
    app.use(express.json())

    // * LOGGER - EVERY REQUEST METHOD AND URL ARE LOGGED IN THE TERMINAL
    app.use((req, _res, next) => {
      console.log(` ********* REQUEST RECEIVED: ${req.method} - ${req.url} *********`)
      next()
    })

    // Router
    app.use(router)

    // * CATCHER
    app.use((_req, res) => res.status(404).json({ message: 'Route not found' }))

    // ! Start node server / Listen for requests
    app.listen(process.env.PORT, () => console.log(`********🏆 Server running on port ${process.env.PORT} 🏆*******`))
  } catch (err) {
    console.log('=========== Something went wrong when starting the servers =========')
    console.log(err)
  }
}
startServer()