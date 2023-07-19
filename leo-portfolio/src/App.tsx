import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inicio } from './pages/Inicio'
import { Portfolio } from './pages/Portfolio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AcercaDe } from './pages/AcercaDe'
import { Contacto } from './pages/Contacto'
import { Error } from './pages/Error'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Inicio/>}/>
      <Route path="/acercade" element={<AcercaDe/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    )
  }
  
  export default App
 


  


