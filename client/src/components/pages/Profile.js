import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { isOwner, getToken } from '../../components/helpers/auth'

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


  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(`/api/projects/${projectId}`)
        // authorization ?
        console.log(data)
        setProject(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getProject()
  }, [projectId])



  return (
    <main className='single-page'>
      <Container className='mt-4'>
        <Row>
          {project ?
            <>
              <div className='profile'>
                {/* ****  ARTIST NAME ******* */}
                <h1 className='mb-4'>{project.name}</h1>
                <Col md="6">
                  {/* ****  USER IMG ******* */}
                  <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                    src={project.image} alt={project.name} />
                </Col>
                {/* **** LOCATION ******* */}
                <h2><span>📍</span> Location </h2>
                <p>{project.location}</p>
                <hr />
                {/* **** BIO ******* */}
                <h2><span>📘</span> Bio </h2>
                <p>{project.bio}</p>
                <hr />
                <Col md="6">
                  {/* **** YEAR ******* */}
                  <h2><span>🔵</span> Year</h2>
                  <p>{project.year}</p>
                  <hr />
                  {/* **** Owner ******* */}
                  <h2><span>🖼</span> Owner </h2>
                  <p>{project.owner}</p>
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
