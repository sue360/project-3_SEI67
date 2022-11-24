import Project from '../models/project.js'
import { NotFound, Unauthorised } from '../config/errors.js'
import { sendErrors, findProject } from '../config/helpers.js'

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
    const project = await Project.findById(id).populate('owner')
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
    const projectWithOwner = { ...req.body, owner: req.currentUser._id }
    const projectToAdd = await Project.create(projectWithOwner)
    console.log('PROJECT TO ADD--->', projectToAdd)
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
    const project = await findProject(req, res)
    if (project && req.currentUser._id.equals(project.owner)) {
      Object.assign(project, req.body)
      project.save()
      return res.status(202).json(project)
    }
    throw new Unauthorised()
  } catch (err) {
    console.log(err)
    sendErrors(res, err)
  }
}

// ? DELETE ROUTE
// Method: DELETE
// Endpoint: /projects/:id
export const deleteProject = async (req, res) => {
  try {
    const project = await findProject(req, res)
    if (project && project.owner.equals(req.currentUser._id)) {
      await project.remove()
      return res.sendStatus(204)
    }
    throw new Unauthorised()
  } catch (err) {
    sendErrors(res, err)
  }
}