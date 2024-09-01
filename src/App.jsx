import { useState } from 'react'
import './App.css'
import GroupPages from './components/Group/GroupPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import SiteMap from "../src/sitemap.xml";
import Robots from "../src/robots.txt";


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<GroupPages/>} />
          <Route path="/sitemap" element={<SiteMap/>} />
          <Route path="/robots" element={<Robots/>} />
      </Routes>
    </>
  )
}

export default App
