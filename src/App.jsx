import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Auth from './pages/Auth'


function App() {
  

  return (
   <div className='flex flex-col h-screen'>
    <NavBar/>
    <Routes className='mt-20'>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/authentication' element={<Auth/>}/>
    </Routes>
   </div>
  )
}

export default App
