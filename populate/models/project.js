/* eslint-disable comma-dangle */
import mongoose from 'mongoose'

// ! Schema and Model

// ? ******* REVIEW SCHEMA **************** (Embedded relationship)

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 500 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true //option
})


// ? ******* PROJECT SCHEMA ************* (Referenced relationship)

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true, unique: true },
  image: { type: String, required: true }, // temp, cloudinary 
  year: { type: Number, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
})



// ************* Model ************

export default mongoose.model('Project', projectSchema)