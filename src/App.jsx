import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer} from 'react-toastify';
import Leaderboard from './pages/Leaderboard'
import DeveloperPage from './pages/DeveloperPage'
import InfluencerPage from './pages/InfluencerPage'
import SponsorPage from './pages/SponsorPage'
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/selectionpage' element={<LoginSelection/>}/> */}
        <Route path="/developer-dashboard"element={<DeveloperPage />}/>
        <Route path="/influencer-dashboard" element={<InfluencerPage/>}/>
        <Route path="/sponsor-dashboard" element={<SponsorPage/>}/>
        <Route path='/Leaderboard' element={<Leaderboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App