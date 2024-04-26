import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css';
import Navbar from './pages/Navbar';
import Articles from './pages/Articles';
import Login from './pages/Login'
import Register from './pages/Register';
import Assessments from './pages/Assessment';

const App = () => (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="articles" element={<Articles />} />
      <Route path="contact" element={<Contact />} />
      <Route path="assess" element={<Assessments />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  // <>
  //   <div>
  //     <h1>Hello</h1>
  //   </div>
  // </>
);

export default App;
