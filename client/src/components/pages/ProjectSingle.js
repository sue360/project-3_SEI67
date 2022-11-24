import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios'
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectSingle = () => {

  const [project, setProject] = useState(null)
  const [errors, setErrors] = useState(false)

  const { projectId } = useParams()

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(`/api/projects/${projectId}`)
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
              <h1 className='mb-4'>{project.name}</h1>
              <Col md="6">
                <img src={project.image} alt={project.name} />
              </Col>
              <Col md="6">
                <h2><span>👤</span> Added by</h2>
                <p>{project.addedBy.username}</p>
                <hr />
              </Col>
            </>
            :
            errors ? <h2>Something went wrong! Please try again later!</h2> : <h2>Loading</h2>
          }
        </Row>
      </Container>
    </main>
  )
}

export default ProjectSingle

