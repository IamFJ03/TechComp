import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Homepage.jsx'
import About from '../Pages/About.jsx'
import Service from '../Pages/Service.jsx'
import Portfolio from '../Pages/Portfolio.jsx'
import Blog from '../Pages/Blog.jsx'
import Contact from '../Pages/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Service' element={<Service />}/>
      <Route path='/Portfolio' element={<Portfolio />}/>
      <Route path='/Blog' element={<Blog />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
