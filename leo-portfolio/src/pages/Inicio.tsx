import React from 'react'
import { Navegador } from '../components/Navegador/Navegador'
import { Footer } from '../components/Footer/Footer'

export const Inicio = () => {
  return (
    <div className='containerprincipal'> 
   <Navegador/>
   <div> Programador Junior</div>
   <Footer/>
    </div>
  )
}
