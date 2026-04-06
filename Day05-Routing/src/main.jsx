import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Routes/Home.jsx"

import Contact from './components/Routes/Contact.jsx'
import Github from './components/Routes/Github.jsx'
import About from './components/Routes/About.jsx'
import User from './components/Routes/User.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />

    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/github' element={<Github />} />
        <Route path="/user/:id" element={<User />} />
      <Route />
    </Routes>
  </BrowserRouter>

)
