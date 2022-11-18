/* eslint-disable comma-dangle */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// ?  Fields

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function (fieldValue) {
    this._passwordConfirmation = fieldValue
  })

// ! ***** pre validation *******

userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Password do not match!')
    }
    next()
  })

// ! ******* pre-save -> Hash the psw *******

userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) { // check if has been modified
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12)) //se é stata modificata, la crypta e la riassegna dentro this.password se no va a next()
      console.log(this.password)
    }
    next()
  })

// !  ***** Custom method for checking plain text against hashed password ******

// this.password é la stored hashed password 
userSchema.methods.validatePassword = function (plainTextPassword) {
  return bcrypt.compareSync(plainTextPassword, this.password)
}



export default mongoose.model('User', userSchema)