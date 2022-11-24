import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageUploadForm from './components/ImageUploadForm'
import FeedbackForm from './components/FeedbackForm'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/projects/feedbackform" element={<FeedbackForm />} />
          <Route path="/projects/imageuploadform" element={<ImageUploadForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App