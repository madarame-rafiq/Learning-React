import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Footer />
      <Outlet />
      <Header />
    </>
  )
}

export default App