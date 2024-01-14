//import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// NavBar
import { NavBar } from './components/Dashboard/NavBar/NavBarTop';

// DashBoard
import { DashBoard } from './components/Dashboard/dashboard';


// LoginPage
import LoginUser from './components/LoginPage/login';

// Add Tenant User
import TenantUser from './components/TenantUser/TenantUser';


// Add Device
import AddDevice from './components/Device/addDevice';


function App() {

  


  function MyComponent() {
  
    return (
      <div>
        ji
      </div>
    );
  }

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={<h1 style={{margin:50}}><MyComponent/></h1>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/login" element={<LoginUser/>}/>
      <Route path='/add-tenant-user' element={<TenantUser/>}/>
      <Route path='/add-device' element={<AddDevice/>}/>
      <Route path="/*" element={<LoginUser/>}/>
    </Routes>
    </>
  );
}


export default App;
