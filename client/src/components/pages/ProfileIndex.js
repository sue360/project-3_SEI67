import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'

const ProjectIndex = () => {

  const [project, setProject] = useState([])


  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get('/api/projects')
        setProject(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProject()
  }, [])


  return (
    <main className="index-page">
      <Container className='mt-4'>
        <Row>
          {project.length > 0 &&
            project.map(b => {
              // endpoint for single project: /project/:id
              const { _id, projectName, image, year, owner } = b
              return (
                <Col key={_id} md="6" lg="4" >
                  <Link to={`/projects/${_id}`}>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  )
}

export default ProjectIndex