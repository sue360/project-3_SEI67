import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import './styles/main.scss'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

/*
const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })
*/

function App() {
  const [currentValue, setCurrentValue] = useState(0) // default value zero
  const [hoverValue, setHoverValue] = useState(undefined) // hover value undefined
  const stars = Array(5).fill(0)

  const handleClick = value => {    // handle click event, updates current value of rating
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {   // updates hover value
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {   // when mouse doesn't hover over ratings anymore it is set to undefined
    setHoverValue(undefined)
  }

  return (
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
      <button>
        Submit feedback
      </button>
    </div>
  )
}

//}

export default App
