import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Auth from './pages/Auth'
import Onboarding from './pages/Onboarding '



function App() {
  

  return (
   <div className='flex flex-col h-screen'>
    <NavBar/>
    <Routes className='mt-20'>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/authentication' element={<Auth/>}/>
      <Route path="/onboarding/:step" element={<Onboarding/>}/>
     
    </Routes>
   </div>
  )
}

export default App
