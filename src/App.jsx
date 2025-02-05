import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Auth from './pages/Auth'
import Onboarding from './pages/Onboarding '
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'



function App() {
  

  return (
   <div className='flex flex-col h-screen'>
    <NavBar/>
    <Routes className='mt-20'>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path='/authentication' element={<Auth/>}/>
      <Route path="/onboarding/:step" element={<Onboarding/>}/>
      <Route path='/'/>
     
    </Routes>
   </div>
  )
}

export default App
