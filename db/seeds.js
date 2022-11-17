import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js' // Import our DBURI so we can connect to the database
import Project from '../models/project.js' // Import the model so we can interact with the database
import projectData from './data/projects.js'
import User from '../models/user.js'
import userData from './data/users.js'


const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('*********** Database connected! *************')

    await mongoose.connection.db.dropDatabase()
    console.log('👍 === Database dropped! ===')

    // Adding users into the database
    const users = await User.create(userData)
    console.log(`👹👹👹 Users collection seeded with ${users.length} users! 👹👹👹`)

    // Once data has been dropped, we want to seed our new data into the database
    const projects = await Project.create(projectData)
    console.log(`🌱🌱🌱🌱🌱🌱 Projects collection seeded with ${projects.length} projects!🌱🌱🌱🌱🌱`)


    // Disconnect from the database
    await mongoose.connection.close()
    console.log(' ***** Goodbye! *****')

  } catch (err) {
    console.log('🔴 Something went wrong')
    console.log(err)
    // Disconnect from the database
    await mongoose.connection.close()
  }
}
seedDatabase()