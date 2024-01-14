//import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// NavBar
import { NavBar } from './components/Dashboard/NavBar/NavBarTop';

// DashBoard
import { DashBoard } from './components/Dashboard/dashboard';


// LoginPage
import LoginPage from './components/LoginPage/loginPage';

// Add Tenant User
import TenantUser from './components/TenantUser/TenantUser';



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
      <Route path="/login" element={<LoginPage/>}/>
      {/* <Route path="/protected" element={<ProtectedComponent/>}/> */}
      <Route path='/add-tenant-user' element={<TenantUser/>}/>
      <Route path="/*" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}


export default App;
