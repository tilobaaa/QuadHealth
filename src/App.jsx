import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'


function App() {
  

  return (
   <div className='flex flex-col h-screen'>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
   </div>
  )
}

export default App
