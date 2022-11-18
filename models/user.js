/* eslint-disable comma-dangle */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


// ? ******* REVIEW SCHEMA **************** (Embedded relationship)

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 500 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true //option
})



// ? ******* USER SCHEMA **************** (Referenced relationship)


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

})


// REMOVING PSW

userSchema.set('toJSON', {
  transform(_doc, json) {
    delete json.password
    return json
  }
})

// psw confirmation - virtual 

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