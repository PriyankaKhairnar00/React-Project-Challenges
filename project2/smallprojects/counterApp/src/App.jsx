import { useState } from 'react'

import './App.css'

// import '../Counter.css'
import Counter from '../Counter'
import Randomcolor from './component/random-bg-generator/Randomcolor'
import { Stopwatch } from './component/random-bg-generator/stopwatch/Stopwatch'



function App() {
  

  return (
    <>
      {/* <Counter/> */}
      
    {/* < Randomcolor/> */}
    <Stopwatch/>
    </>
  )
}

export default App
