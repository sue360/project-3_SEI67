
import { sendErrors, findProject } from '../config/helpers.js'

// ? ************** ADD REVIEW **************************

// Method: POST
// Endpoint: /projects/:id/reviews

export const addReview = async (req, res) => {
  try {
    const project = await findProject(req, res)
    if (project) {
      const reviewWithOwner = { ...req.body, owner: req.currentUser._id }
      console.log(reviewWithOwner)
      project.reviews.push(reviewWithOwner)
      await project.save()
      return res.json(project)
    }
  } catch (err) {
    sendErrors(res, err)
  }
}