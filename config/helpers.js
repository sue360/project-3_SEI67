import { CastError } from 'mongoose'
import { NotFound } from '../config/errors.js'
// import Project from '../models/project.js'


export const sendErrors = (res, err) => {
  console.log(err)
  console.log('**err message**', err.message)
  console.log('**err name**', err.name)
  console.log('**err status**', err.status)

  if (err instanceof NotFound) {
    return res.status(err.status).json({ message: err.message })
  } else if (err instanceof CastError) {
    return res.status(400).json({ message: err.message })
  } else if (err.name === 'ValidationError') {
    return res.status(422).json({ message: err.errors ? err.errors : err.message })
  } else {
    return res.status(500).json({ message: err.message })
  }
}


