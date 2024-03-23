import { useState } from 'react'
import Navbar from './loyaut/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Comments from './pages/Comments/Comments'
import CommentEdit from './pages/CommentEdit/CommentEdit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='comments' element={<Comments/>}/>
      <Route path='commentsEdit/:id' element={<CommentEdit/>}/>
     </Routes>
    </>
  )
}

export default App
