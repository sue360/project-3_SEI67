import { Unauthorised } from './errors.js'
import { sendErrors } from './helpers.js'
// import { } from 'dotenv/config'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { secret } from './environment.js'


export default async (req, res, next) => {
  try {
    const auth = req.headers.authorization
    if (!auth) {
      console.log('MISSING HEADERS')
      throw new Unauthorised('Missing headers')
    }
    const token = auth.replace('Bearer ', '')
    console.log(token)
    const payload = jwt.verify(token, secret)
    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) {
      console.log('***** TOKEN VALID BUT USER DOES NOT EXIST ******')
      throw new Unauthorised('User not found')
    }

    req.currentUser = userToVerify

    next()

  } catch (err) {
    sendErrors(res, err)
  }
}