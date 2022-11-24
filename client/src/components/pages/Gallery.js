// Imports
import { useState, useEffect, React } from 'react'

import axios from 'axios'


//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


//map through the array OF DATA that comes in and take the image (image key) from each entry and display them as backgrounds in divs. 
//Each image should be a link to the page that corresponds with its ID

const Gallery = () => {

  //! State
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('')
        setProjects(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProjects()
  }, [])

  return (
    <main>

    </main>
  )

}

//http://localhost:4000/api/projects

export default Gallery
