import { CastError } from 'mongoose'
import { NotFound, Unauthorised } from '../config/errors.js'
import Project from '../models/project.js'


export const sendErrors = (res, err) => {
  console.log(err)
  console.log('**err message**', err.message)
  console.log('**err name**', err.name)
  console.log('**err status**', err.status)

  if (err instanceof NotFound || err instanceof Unauthorised) {
    return res.status(err.status).json({ message: err.message })
  } else if (err instanceof CastError) {
    return res.status(400).json({ message: err.message })
  } else if (err.name === 'ValidationError') {
    return res.status(422).json({ message: err.errors ? err.errors : err.message })
  } else {
    return res.status(500).json({ message: err.message })
  }
}


export const findProject = async (req, res, populations) => {
  try {
    const { id } = req.params
    let project = await Project.findById(id)
    if (!project) throw new NotFound('Project not found')
    if (populations && populations.length){
      const populationPromises = populations.map(population => project.populate(population))
      await Promise.all(populationPromises)
    }
    return project
  } catch (err) {
    sendErrors(res, err)
  }
}