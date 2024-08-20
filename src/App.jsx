import { useState } from 'react'
import './App.css'
import MainArea from './components/Main/MainArea'
import About from './components/About/About'
import Features from './components/Features/Features'
import Courses from './components/Courses/Courses'
import Support from './components/Support/Support'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <MainArea/>
      <Features/>
      <Courses/>
      <Support/>
      <Footer/>
    </>
  )
}

export default App
