// Imports
import { useState, useEffect, React } from 'react'

import axios from 'axios'


//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


//map through the array OF DATA that comes in and take the image (image key) from each entry and display them as backgrounds in divs. 
//Each image should be a link to the page that corresponds with its ID

const Gallery = () => {

  //! State
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects')
        setProjects(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProjects()
  }, [])

  return (
    <main className='index-page'>
      <h1 className='gallery-title'>Gallery</h1>
      <Container className='mt-4'>
        <Row>
          {projects.length > 0 &&
            projects.map(project => {
              const { _id, name, image } = project
              console.log(_id)
              return (
                <Col key={_id} md='6' lg='4' className='project-card mb-4'>
                  <Link to={`/project/${_id}`}>
                    <Card>
                      <div className='card-image' style={{ backgroundImage: `url(${image})` }}></div>
                      <Card.Body>
                        <Card.Title className='mb-0'>{name}</Card.Title>
                      </Card.Body>
                    </Card>
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

//'/api/projects'

export default Gallery
