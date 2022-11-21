// react components
import { useState } from 'react'


// bootstrap

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const Register = () => {


  const [formFields, setFormFields] = useState({
    username: '', //match the input
    email: '',
    password: '',
    passwordConfirmation: '',
  })


  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  // formFields updates (state) when input changes
  const handleChange = (e) => {
    console.log(`${e.target.name}: ${e.taret.value}`)
  }

  return (
    <main className="form-page">
      <Container className='mt-4'>
        <Row>
          <div className='col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
            <form onSubmit={handleSubmit}>
              <h1> REGISTER </h1>
              {/* username */}
              <label htmlFor="username">Username <span>*</span></label>
              <input type="text" name="username" onChange={handleChange} value={formFields.username} placeholder="Username" />
              {/* email */}
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" name="email" onChange={handleChange} value={formFields.email} placeholder="Email" />
              {/* psw */}
              <label htmlFor="password">Password <span>*</span></label>
              <input type="password" name="password" onChange={handleChange} value={formFields.password} placeholder="Password" />
              {/* psw confirmation */}
              <label htmlFor="passwordConfermation">Confirm Password <span>*</span></label>
              <input type="password" name="passwordConfermation" onChange={handleChange} value={formFields.passwordConfirmation} placeholder="Password Confirmation" />
              {/* submit */}
              <button className="btn btn-main w-100">Register</button>
            </form>
          </div>
        </Row>
      </Container>
    </main>
  )
}
export default Register