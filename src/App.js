import logo from './logo.svg';
import './App.css';
import { Dropdown, TextInput } from './ui/Input';

import Auth from './Auth/Auth';
import LayoutApp from './LayoutApp';
import { BrowserRouter, Navigate, Outlet, redirect, Route, Router, Routes, useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import Search from './search/Search';
import Dashboard from './Dashboard/Dashboard';
import Profile from './EditProfile/profile/Profile';
import Horoscopic from './EditProfile/horoscope/Horoscopic';
import Photos from './EditProfile/photos/Photos';
import UnderDevelopment from './ui/card/underdevelopment/UnderDevelopment';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/profileSlice';
import { useEffect, useState } from 'react'
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';


function App() {
  const [isAuth, setisAuth] = useState(false)
  const dispatch = useDispatch()
  const showPage = useSelector((state) => state.isAuth)

  useEffect(()=>{
    setisAuth(true)
  },[showPage])
  
  useEffect(()=>{
    // const jwt = localStorage.getItem('jwtToken')
    dispatch(authenticate())
    console.log(showPage)
    setisAuth(showPage)
    console.log(isAuth)
  },[])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Auth />} />
            <Route element={<LayoutApp />}>
            <Route path="/manage" element={<ProtectedRoute  isAllowed={isAuth}/>} >
              <Route index element={<EditProfile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="horoscope" element={<Horoscopic />} />
              <Route path="photos" element={<Photos />} />
              <Route path="patner-prefrence" element={<div> <UnderDevelopment /></div>} />
              <Route path="profiles_you_viewed" element={<div> <UnderDevelopment /></div>} />
              <Route path="who_viewd_your_profile" element={<div> <UnderDevelopment /></div>} />
            </Route>
            <Route path="/help" element={ <ProtectedRoute isAllowed={isAuth}> <UnderDevelopment /> </ProtectedRoute>}/>
            <Route path="/notification" element={<ProtectedRoute isAllowed={isAuth}> <UnderDevelopment /> </ProtectedRoute>} />
            <Route path="/search" element={<ProtectedRoute isAllowed={isAuth}> <Search /> </ProtectedRoute>} />
            <Route path="/dashboard" element={ <ProtectedRoute isAllowed={isAuth}> <Dashboard /> </ProtectedRoute>}/>
            <Route
              path="*"
              element={<Navigate to="/manage" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
