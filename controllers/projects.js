import Project from '../models/project.js'

// ? INDEX ROUTE
// Method: GET
// Endpoint: /projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    console.log(projects)
    return res.json(projects)
  } catch (err) {
    console.log(err)
  }
}

// ? SHOW ROUTE
// Method: GET
// Endpoint: /projects/:id
// Description: Return a single project that matches the id passed in the params
export const getSingleProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findById(id)
    if (!project) {
      throw new Error('Project not found')
    }
    return res.json(project)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Project not found' })
  }
}

// ? ADD ROUTE
// Method: POST
// Endpoint: /projects
export const addProject = async (req, res) => {
  try {
    const projectToAdd = await Project.create(req.body)
    console.log(projectToAdd)
    return res.status(201).json(projectToAdd)
  } catch (err) {
    console.log('🆘 Project not created')
    console.log(err)
    return res.status(422).json(err.errors)
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
    console.log(err)
    return res.status(404).json({ message: 'Project not found' })
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
    console.log(err)
    return res.status(404).json({ message: 'Project not found' })
  }
}