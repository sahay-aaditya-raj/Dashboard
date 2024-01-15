//import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// NavBar
import { NavBar } from './components/Device/NavBar/NavBarTop';

// DashBoard
import { DashBoard } from './components/Dashboard/dashboard';


// LoginPage
import LoginUser from './components/LoginPage/login';

// Add Tenant User
import TenantUser from './components/TenantUser/TenantUser';


// Add Device
import AddDevice from './components/Device/addDevice';


// Get Devices
import DevicesList from './components/Device/getDevices';

// Logout
import Logout from './components/LoginPage/logout';


// Edit Devices
import EditDevices from './components/Device/editDevice';



function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      {/* <Route path="/" exact element={<h1 style={{margin:50}}><MyComponent/></h1>}/> */}
      {/* <Route path="/dashboard" element={<DevicesList/>}/> */}
      <Route path="/login" element={<LoginUser/>}/>
      <Route path='/add-tenant-user' element={<TenantUser/>}/>
      <Route path='/add-device' element={<AddDevice/>}/>
      <Route path='/get-devices' element={<DevicesList/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/edit-devices' element={<EditDevices/>}/>
      <Route path="/*" element={<LoginUser/>}/>
    </Routes>
    </>
  );
}


export default App;
