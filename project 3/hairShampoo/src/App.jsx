import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'

import Hero from './components/HeroSection/Hero'
import Future from './components/Future/Future'
import Deal from './components/Deals/Deal'
import Product from './components/Products/Product'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <>
     <Navbar/>
    
    <Hero />
       <Future/>
       <Deal/>
       <Product/>
       <Contact/>
       <Footer/>
    
    </>
  )
}

export default App
