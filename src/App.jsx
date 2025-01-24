import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  

  return (
   <div className=' mx-4 sm:mx-[10%]'>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </div>
  )
}

export default App
