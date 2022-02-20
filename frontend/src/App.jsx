import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'



function App() {

  return (
    <Router>
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} />
      </Routes>
      </Container>
    </Router>
  )
}

export default App
