import logo from './logo.svg';
import './App.css';
import { Dropdown, TextInput } from './ui/Input';

import Auth from './Auth/Auth';
import LayoutApp from './LayoutApp';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import Search from './search/Search';
import Dashboard from './Dashboard/Dashboard';
import Profile from './EditProfile/profile/Profile';
import Horoscopic from './EditProfile/horoscope/Horoscopic';
import Photos from './EditProfile/photos/Photos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Auth />} />
          <Route element={<LayoutApp />}>
            <Route path="/manage" element={ <Outlet/> } >
              <Route  index element={<EditProfile />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="horoscope" element={<Horoscopic/>} />
              <Route path="photos" element={<Photos/>} />
            </Route>
            <Route path="/search" element={ < Search/> }/>
            <Route path="/dashboard" element={ < Dashboard/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
