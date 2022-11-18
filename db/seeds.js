import mongoose from 'mongoose'
import Project from '../models/project.js'
import projectData from './data/projects.js'
import User from '../models/user.js'
import userData from './data/users.js'
import { } from 'dotenv/config'

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('*********** Database connected! *************')

    await mongoose.connection.db.dropDatabase()
    console.log('👍 === Database dropped! ===')

    // Adding users into the database
    const users = await User.create(userData)
    console.log(`👹👹👹 Users collection seeded with ${users.length} users! 👹👹👹`)
    console.log(users)



    const projectsWithOwners = projectData.map(project => {
      return { ...project, owner: users[0]._id }
    })


    const projects = await Project.create(projectsWithOwners)
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