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


function App() {
  const [isAuth, setisAuth] = useState(false)


  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken')
    console.log(jwt, !!jwt,)
    if (!!jwt) {
     console.log("we are inside Jwt")
      setisAuth(true)
      console.log(isAuth,"seeing Authentication")
    }
  }, []);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Auth />} />
          {!isAuth?    <Route index element={<Auth />} /> :(<Route element={<LayoutApp />}>
            <Route path="/manage" element={<Outlet />} >
              <Route index element={<EditProfile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="horoscope" element={<Horoscopic />} />
              <Route path="photos" element={<Photos />} />
              <Route path="patner-prefrence" element={<div> <UnderDevelopment /></div>} />
              <Route path="profiles_you_viewed" element={<div> <UnderDevelopment /></div>} />
              <Route path="who_viewd_your_profile" element={<div> <UnderDevelopment /></div>} />
            </Route>
            <Route path="/help" element={<div> <UnderDevelopment /></div>} />
            <Route path="/notification" element={<div> <UnderDevelopment /></div>} />
            <Route path="/search" element={< Search />} />
            <Route path="/dashboard" element={< Dashboard />} />
            <Route
              path="*"
              element={<Navigate to="/manage" replace />} />
          </Route>)}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
