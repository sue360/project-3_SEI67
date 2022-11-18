import express from 'express'
import { getAllProjects, getSingleProject, addProject, updateProject, deleteProject } from '../controllers/projects.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import secureRoute from '../config/secureRoute.js'
import { addReview } from '../controllers/reviews.js'

const router = express.Router()

router.route('/projects')
  .get(secureRoute, getAllProjects)
  .post(secureRoute, addProject)

router.route('/projects/:id')
  .get(secureRoute, getSingleProject)
  .put(secureRoute, updateProject)
  .delete(secureRoute, deleteProject)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/projects/:id/reviews')
  .post(secureRoute, addReview)

export default router