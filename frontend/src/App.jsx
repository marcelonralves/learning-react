import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {

  const styleHeight = {
    min_height: '75%',
  }
  return (
    <Router>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
