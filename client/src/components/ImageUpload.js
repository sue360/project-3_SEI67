import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ImageUploadForm from './ImageUploadForm'



const ImageUpload = ({ formdata, setFormdata }) => {
  const navigate = useNavigate()

  const handleChange = async (event) => {
    try {
      console.log(event.target.files[0])
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
      setFormdata({ ...formdata, projectImage: data.secure_url })
    } catch (err) {
      console.log(err)
    }
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
      

  return (
    <div className="choose-file-button">
      <div className="field">
        <label>AI Project Image: </label>
        { formdata.profileImage ?
          <img src={formdata.projectImage} alt="Art image" />
          :
          <input
            className="input"
            type="file"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        }
      </div>
    </div>
  )
}

export default ImageUpload