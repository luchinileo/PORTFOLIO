import React from 'react'
import { Navegador } from '../components/Navegador/Navegador'
import { Grid } from '@mui/material'
import { Footer } from '../components/Footer/Footer';

export const AcercaDe = () => {
  return (
    <div className='containerAcercaDe'>
    <Navegador/>
    <div >
      <Grid container className='acercade'>
        <Grid item xs={12} md={6}  style={{ width: "100%", height: "700px "}} >
      <h2 >
           Programador Junior Back-End
      </h2>
      <p className='parrafo'> Mi nombre es Leonardo y actualmente estoy estudiando la carrera de Programador Full-Stack. Tengo experiencia en:
               HTML, CSS, Node.js, JavaScript, TypeScript, React, Nest y MySQL.
           <br /> Me gustaría tener la oportunidad de trabajar en un proyecto grande,donde pueda aprender al máximo.
           <br />   He creado proyectos que se ajustan a mi nivel actual de conocimiento, pero estoy en constante aprendizaje para poder aplicar nuevos conceptos en los próximos.
           <br /> Mi objetivo es trabajar en proyectos más desafiantes para ampliar mis habilidades. He encontrado mi pasión en la programación y estoy emocionado por seguir creciendo en este campo.
           <br /> ¡Espero tener la oportunidad de contribuir a un proyecto significativo y seguir aprendiendo de la experiencia!
           <br /> ¡Gracias por tu consideración!
       </p>
        </Grid>
        <Grid>
          <p>hola</p>
          <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/02/lenguaje-programacion-1859691.jpg?tf=1200x"  style={{ width: "100%", height: "400px "}} />
        </Grid>
      </Grid>   
      </div>
      <Footer/>
    </div>
  )
  }
 

            
