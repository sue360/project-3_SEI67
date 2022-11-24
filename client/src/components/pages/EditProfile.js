import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/auth'


import Container from 'react-bootstrap/Container'

const EditProfile = () => {

  const navigate = useNavigate()
  const { projectId } = useParams()

  const [errors, setErrors] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    location: '',
    bio: '',
    year: '',
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    image: '',
    location: '',
    bio: '',
    year: '',
  })

  useEffect(() => {
    !userIsAuthenticated() && navigate('/login')

    const getProject = async () => {
      try {
        const { data } = await axios.get(`/api/projects/${projectId}`)
        // {
        //   headers: {
        //     Authorization: `Bearer ${localstoragequalcosa()}`,
        //   },
        // })
        setFormData(data)
      } catch (err) {
        setErrors('the project doesnt exist')
      }
    }
    getProject()
  }, [projectId, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(
        `/api/projects/${projectId}`,
        formData
        // {
        //   headers: {
        //     Authorization: `Bearer ${localstoragequalcosa()}`,
        //   },
        // }
      )
      navigate(`/projects/${projectId}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, displayPicture: url })
  }

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  return (
    <section className="form-page">
      <Container className='mt-4'>
        <ProjectForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleImageUrl={handleImageUrl}
          formData={formData}
          formErrors={formErrors}
        />
      </Container>
    </section>
  )
}

export default EditProfile