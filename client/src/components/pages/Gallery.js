// Imports
import { useState, useEffect, React } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'


//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

//
//map through the array OF DATA that comes in and take the image (image key) from each entry and display them as backgrounds in divs. 
//Each image should be a link to the page that corresponds with its ID

const Gallery = () => {

  //! State
  const [getProjects, setProjects] = useState([])

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

  return (
    <>
      <h1>Test</h1>
    </>
  )

}


export default Gallery
