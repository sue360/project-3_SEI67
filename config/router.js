import express from 'express'
import { getAllProjects, getSingleProject, addProject, updateProject, deleteProject } from '../controllers/projects.js'
const router = express.Router()

router.route('/projects')
  .get(getAllProjects)
  .post(addProject)

router.route('/projects/:id')
  .get(getSingleProject)
  .put(updateProject)
  .delete(deleteProject)

export default router