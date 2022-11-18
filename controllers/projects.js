import Project from '../models/project.js'
import { NotFound } from '../config/errors.js'
import { sendErrors } from '../config/helpers.js'

// ? INDEX ROUTE
// Method: GET
// Endpoint: /projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('owner')
    console.log(projects)
    return res.json(projects)
  } catch (err) {
    sendErrors(res, err)
  }
}

// ? SHOW ROUTE
// Method: GET
// Endpoint: /projects/:id
export const getSingleProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findById(id)
    if (!project) {
      throw new NotFound('Project not found')
    }
    return res.json(project)
  } catch (err) {
    sendErrors(res, err)
  }
}

// ? ADD ROUTE
// Method: POST
// Endpoint: /projects
export const addProject = async (req, res) => {
  console.log('REQ CURRENT USER--->', req.currentUser)
  try {
    const projectToAdd = await Project.create(req.body)
    console.log(projectToAdd)
    return res.status(201).json(projectToAdd)
  } catch (err) {
    sendErrors(res, err)
  }
}

// ? UPDATE ROUTE
// Method: PUT
// Endpoint: /projects/:id
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    return res.status(202).json(project)
  } catch (err) {
    sendErrors(res, err)
  }
}

// ? DELETE ROUTE
// Method: DELETE
// Endpoint: /projects/:id
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params
    const projectToDelete = await Project.findByIdAndDelete(id)
    if (!projectToDelete) {
      throw new Error('Project not found')
    }
    return res.sendStatus(204)
  } catch (err) {
    sendErrors(res, err)
  }
}