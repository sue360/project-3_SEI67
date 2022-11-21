
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


// ? ************ DELETE REVIEW *******************
// Method: DELETE
// Endpoint: /projects/:id/reviews/:reviewId - 
export const deleteReview = async (req, res) => {
  try {
    const project = await findProject(req, res)
    if(project){
      const { reviewId } = req.params
      const foundReview = project.reviews.id(reviewId)
      if (!foundReview) throw new NotFound('Review not found')
      if (!req.currentUser._id.equals(foundReview.owner)) throw new Unauthorised()
      await foundReview.remove()
      await project.save()
      return res.sendStatus(204)
    }
  } catch (err) {
    sendErrors(res, err)
  }
}