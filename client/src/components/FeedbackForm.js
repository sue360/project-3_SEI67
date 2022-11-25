import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaPlaneDeparture, FaStar } from 'react-icons/fa'
import { useParams } from 'react-router'
import { getToken } from './helpers/auth'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}






const FeedbackForm = () => {
  const [hoverValue, setHoverValue] = useState(undefined) // hover value undefined
  const stars = Array(5).fill(0)


  const [ error, setError ] = useState(false)
  const [ formdata, setFormdata ] = useState({
    rating: '',
    text: '',
  })

  const { projectId } = useParams()


  const handleChange = event => {
    const updatedReviewField = {
      ...formdata,
      [event.target.name]: event.target.value,
    }
    setFormdata(updatedReviewField)
    if (error) setError('')
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/api/projects/${projectId}/review`, formdata, {
        headers: {
          Authorization: `Bearer ${getToken()}`, 
        },
      })
      console.log('SUCCESS ->', data._id)
    } catch (err) {
      console.log(err.response.data)
    }
  }





  const handleClick = value => {    // handles click event, updates current value of rating
    setFormdata({ ...formdata, rating: value })
  }

  const handleMouseOver = newHoverValue => {   // updates hover value
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {   // when mouse doesn't hover over ratings anymore it is set to undefined
    setHoverValue(undefined)
  }



  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Rating</h1>
        <div className="stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)} 
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || formdata.rating) > index ? colors.orange : colors.grey}
              />
            )
          })}
        </div>
        <textarea
          placeholder="Give a rating by clicking the stars and leave some feedback"
          className="textarea"
        />
        <div>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            placeholder="Review"
          />
          <button className="submit-feedback-button" onClick={handleClick}>
            Submit feedback
          </button>
          <button>Delete Feedback</button>
        </div>
      </form>
    </div>
  )
}


export default FeedbackForm
