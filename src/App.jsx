import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Auth from './pages/Auth'
import Onboarding from './pages/Onboarding '
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import useOnboardingStore from './store/onBoardingStore'
import { Navigate } from 'react-router-dom'



function App() {
  const { signupData } = useOnboardingStore();
  const email = signupData.email

  return (
   <div className='flex flex-col h-screen'>
    <NavBar/>
    <Routes>
      <Route path="/" element={email? <Home />: <SignUp/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path='/authentication' element={<Auth/>}/>
      <Route path="/onboarding/:step" element={<Onboarding/>}/>
      <Route path='/doctor/:id/profile' element={<Profile/>} />
    </Routes>
   </div>
  )
}

export default App
