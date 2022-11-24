import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}


function FeedbackForm() {
  const [currentValue, setCurrentValue] = useState(0) // default value zero
  const [hoverValue, setHoverValue] = useState(undefined) // hover value undefined
  const stars = Array(5).fill(0)

  const handleClick = value => {    // handles click event, updates current value of rating
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {   // updates hover value
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {   // when mouse doesn't hover over ratings anymore it is set to undefined
    setHoverValue(undefined)
  }

  return (
    <div>
      <div className="container">
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
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              />
            )
          })}
        </div>
        <textarea
          placeholder="Give a rating by clicking the stars and leave some feedback"
          className="textarea"
        />
        <div>
          <button className="submit-feedback-button">
          Submit feedback
          </button>
        </div>
      </div>
    </div>
  )
}


export default FeedbackForm
