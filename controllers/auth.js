/* eslint-disable comma-dangle */
import User from '../models/user.js'
import { Unauthorised } from '../config/errors.js'
import { sendErrors } from '../config/helpers.js'
import jwt from 'jsonwebtoken'
// import { } from 'dotenv/config'
import { secret } from '../config/environment.js'




// ********* REGISTER USER ***********

export const registerUser = async (req, res) => {
  console.log('**** REGISTER ENDPOINT HIT ***')
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: err.message })
  }
}


// ************ LOGIN USER ***************

export const loginUser = async (req, res) => {
  try {
    console.log('LOGIN ENDPOINT HIT')
    const { email, password } = req.body
    const userToLogin = await User.findOne({ email: email })
    console.log('userToLogin -> ', userToLogin)

    // check if the psw matches 
    if (!userToLogin || !userToLogin.validatePassword(password)) {
      throw new Unauthorised()
    }

    const payload = {
      sub: userToLogin._id, // user making the request, this has to be unique so we use the _id
      username: userToLogin.username
    }

    // const secret = process.env.SECRET
    const token = jwt.sign(payload, secret, { expiresIn: '1 year' }) // test it with 2 mins
    console.log('TOKEN ->', token)

    return res.json({ message: `*** WELCOME BACK ${userToLogin.username} ***`, token: token })

  } catch (err) {
    sendErrors(res, err)
  }
}