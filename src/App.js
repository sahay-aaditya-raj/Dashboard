//import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// NavBar
import { NavBar } from './components/Dashboard/NavBar/NavBarTop';

// DashBoard
import { DashBoard } from './components/Dashboard/dashboard';


// LoginPage
import LoginPage from './components/LoginPage/loginPage';
import ProtectedComponent from './components/LoginPage/protected';



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
      <Route path="/dashboard" exact element={<h1 style={{margin:50}}><MyComponent/></h1>}/>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/protected" element={<ProtectedComponent/>}/>
      <Route path="/*" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}


export default App;
