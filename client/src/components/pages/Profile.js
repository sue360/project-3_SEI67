import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isOwner, getToken } from '../helpers/auth'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Profile = () => {

  const { projectId } = useParams()
  console.log('useParams ---->', useParams)
  const navigate = useNavigate()


  const [project, setProject] = useState(null)
  const [errors, setErrors] = useState(false)
 
  const getProject = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`)
      // authorization ?
      console.log(data)
      setProject(data)
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }, [projectId])

  useEffect(() => {
    
    getProject()
  }, [projectId])

  const deleteReview = async (reviewId) => {
    try {
      await axios.delete(`/api/projects/${projectId}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`, 
        },
      })
      getProject()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='single-page'>
      <Container className='mt-4'>
        <Row>
          {project ?
            <>

              <div className='profile'>
                <Col md="6">
                  {/* ****  USER IMG ******* */}
                  <img src={project.image} alt={project.name} />
                </Col>
                <hr />
                {/* **** Artist ******* */}
                <h2><span>🖼</span> Artist </h2>
                <h1>{project.owner.username}</h1>
                <hr />
                {/* **** PROMPT ******* */}
                <h2><span>📘</span> Midjourney prompt: </h2>
                <h2>{project.name}</h2>
                <hr />
                <Col md="6">
                  {/* **** YEAR ******* */}
                  <h2><span>🔵</span> Year</h2>
                  <p>{project.year}</p>
                  <hr />
                  {/* AVG Rating  */}
                  <h2><span>🏁</span> Average Rating </h2>
                  <p>{project.avgRating}</p>
                  <hr />
                  {/* AVG Reviews  */}
                  <h2><span>💬</span> Reviews </h2>
                  <div>
                    {project.reviews.length > 0 && project.reviews.map(review => {
                      return (
                        <div key={review._id}>
                          <p>{review.text}</p>
                          <p>{review.rating}</p>
                          <div>
                            <Link to={`/projects/${projectId}/reviews/${review._id}/edit`}>Edit</Link>
                            <button onClick={() => deleteReview(review._id)}>Delete</button>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Link to={`/projects/${projectId}/reviews`}>Add review</Link>
                  <hr />
                  <Link to="/projects" className='btn btn-main'>Back to projects</Link>
                </Col>
              </div>
            </>
            :
            errors ? <h2>Something went wrong!</h2> : <h2>Loading</h2>
          }
        </Row>
      </Container>
    </main>
  )
}

export default Profile
