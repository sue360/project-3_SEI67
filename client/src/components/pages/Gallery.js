// Imports
import { useState, useEffect, React } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'


//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


// ! State

const Gallery = () => {
  const [getProjects, setProjects] = useState([])
  return (
    useEffect(() => {
      const getProjects = async () => {
        try {
          const { data } = await axios.get('http://localhost:4000/api/projects')
          setProjects(data)
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      }
      getProjects()
    }, [])







  )

}



/*
    <>

      <div className='project_container'>
        <div className='starter_1'>
          <p className='project_text'>Project 1</p>
        </div>
        <div className='starter_2'>
          <p className='project_text'>Project 2</p>
        </div>
        <div className='starter_3'>
          <p className='project_text'>Project 3</p>
        </div>
      </div>
    </>
  )
}
*/

export default Gallery




/*

/ ! State 
  const [ works, setWorks ] = useState([])
  const [ errors, setErrors ] = useState(false)

useEffect(() => {
    const getProjects = async () => {
      generateRandomSelection()
      try {
        const { data } = await axios.get(`api endpoint link here`)
        const { works } = data
        setWorks(works)
        console.log(data.works.length)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getProjects()
  }, [subject])


  return (
    <main className='index-page'>
      <Container className='mt-4'>
        <Row>
          {project.length > 0 &&
            project.map(b => {
              // endpoint for single project: /project/:id
              const { _id, name, origin, image } = b
              console.log(_id)
              return (
                <Col key={_id} md="6" lg="4" className='project-card'>
                  <Card>
                    <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
                    <Card.Body>
                      <Card.Title className='mb-0'>{name} - {origin}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  )
  */