import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      < Home />
      < Services />
    </>
  )
}

export default App
