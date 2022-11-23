
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// bootstrap

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button' (remember to import Button later)



const Register = () => {

  const navigate = useNavigate()


  const [formFields, setFormFields] = useState({
    username: '', //match the input
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [error, setError] = useState('')

  // formFields updates (state) when input changes
  const handleChange = (e) => {
    const updatedFormFields = {
      ...formFields,
      [e.target.name]: e.target.value,
    }
    setFormFields(updatedFormFields)
  }


  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formFields)
    try {
      await axios.post('/api/register', formFields)
      console.log('Register successful')
      navigate('/login')
    } catch (err) {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    }
  }



  return (
    <main className="form-page">
      <Container className='mt-4'>
        <Row>
          <div className='col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
            <form onSubmit={handleSubmit} className="mt-4">
              <h1> REGISTER </h1>
              {/* username */}
              <label htmlFor="username">Username <span>*</span></label>
              <input type="text" name="username" onChange={handleChange} value={formFields.username} placeholder="Username" />
              {/* {error.username && (
                <Form.Text>{error.username}</Form.Text>
              )} */}
              {/* email */}
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" name="email" onChange={handleChange} value={formFields.email} placeholder="Email" />
              {/* {error.email && (
                <Form.Text>{error.email}</Form.Text>
              )} */}
              {/* psw */}
              <label htmlFor="password">Password <span>*</span></label>
              <input type="password" name="password" onChange={handleChange} value={formFields.password} placeholder="Password" />
              {/* {error.password && (
                <Form.Text>{error.password}</Form.Text>
              )} */}
              {/* psw confirmation */}
              <label htmlFor="passwordConfirmation">Confirm Password <span>*</span></label>
              <input type="password" name="passwordConfirmation" onChange={handleChange} value={formFields.passwordConfirmation} placeholder="Password Confirmation" />
              {/* {error.passwordConfirmation && (
                <Form.Text>{error.passwordConfirmation}</Form.Text>
              )} */}
              {/* error */}
              {error && <small className='text-danger'>{error}</small>}
              {/* submit */}
              <button className="btn btn-main w-100">Register</button>
            </form>
          </div>
        </Row>
      </Container>
    </main >
  )
}
export default Register