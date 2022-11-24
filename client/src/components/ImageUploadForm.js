import { useEffect, useState } from 'react'
import ImageUpload from './ImageUpload'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const ImageUploadForm = () => {
  const navigate = useNavigate()

  const [ formdata, setFormdata ] = useState({
    projectName: '',
    year: '',
    projectImage: '',
  })

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/projects', formdata)
      console.log('SUCCESS ->', data._id)
      navigate('/projects')
    } catch (err) {
      console.log(err.response.data)
    }
  }


  useEffect(() => console.log(formdata))

  return (
    <div className="image-form">
      <main className="section">
        <div className="small-section">
          <div className="mobile">
            <form onSubmit={handleSubmit}> 
              <div className="field">
                <label htmlFor="title" className="label">Project Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="title"
                    value={formdata.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="year" className="label">Year</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    name="year"
                    value={formdata.year}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <ImageUpload 
                formdata={formdata}
                setFormdata={setFormdata}
              />
              <div className="field">
                <button className="img-submit-button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ImageUploadForm
