import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Selection from './components/selection'
function App() {
  

  return (
  
    <body className='bg-netral-200 font-main overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Selection/>
    </body>
       
  )
}

export default App
