/* eslint-disable comma-dangle */
import mongoose from 'mongoose'

// ! Schema and Model


// ? ******* REVIEW SCHEMA **************** (Embedded relationship)

// const reviewSchema = new mongoose.Schema({
//   text: { type: String, required: true, maxlength: 300 },
//   rating: { type: Number, required: true, min: 1, max: 5 },
//   owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// }, {
//   timestamps: true
// })

// ? ******* PROJECT SCHEMA ************* (Referenced relationship)
// Referenced relationship is where a document has a field that references another document in another collection
// The field in question will relate to the unique id, known as the ObjectId in mongoose, and this will allow us to use the populate method to return the full document when we query this schema
// For example, when I query a single album, using the populate method on the "owner" field will return the whole document as a nested object on the JSON response, instead of just the _id that is stored in the database

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true, unique: true },
  image: { type: String, required: true }, // temp, cloudinary 
  year: { type: Number, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // reviews: [reviewSchema]
}, {
  timestamps: true
})



// ************* Model ************

export default mongoose.model('Project', projectSchema)