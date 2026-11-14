import { Grid } from '@mui/material'
import React from 'react'
import data from '../data/proyecto.json'
import { Navegador } from '../components/Navegador/Navegador'
import { Footer } from '../components/Footer/Footer';

export const Portfolio = () => {
    return (
        
        <>
        <Navegador/>
        <Grid container >
            {
               data.proyectos.map((proyecto) =>( 
                   <Grid  item xs={12} md={4}  key={proyecto.id} className='box_porfolio'>
                          Proyecto : {proyecto.title}
                       <img src={proyecto.image}  style={{ width: "100%", height: "300px "}} />
                          <div style={{width:"100%", height:20}}></div>
                          Descripcion:{proyecto.description}
                          <p >Enlace: <a href={proyecto.url} target="_blank" rel="noopener noreferrer">{proyecto.url_demo}</a></p>
                    </Grid>
             )   
             )   
            }
        </Grid>
            
        </>
       
    )
}



