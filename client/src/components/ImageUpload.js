import axios from 'axios'


const ImageUpload = ({ formdata, setFormdata }) => {

  const handleChange = async (event) => {
    try {
      console.log(event.target.files[0])
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
      setFormdata({ ...formdata, image: data.secure_url })
    } catch (err) {
      console.log(err)
    }
  }


      

  return (
    <div className='form-container'>
      <div className="choose-file-button">
        <div className="field">
          <label>AI Project Image: </label>
          { formdata.image ?
            <img src={formdata.image} alt="Art image" />
            :
            <input
              className="input"
              type="file"
              onChange={handleChange}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default ImageUpload