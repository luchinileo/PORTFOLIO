import { Grid } from '@mui/material'
import React from 'react'
import data from '../data/proyecto.json'
import { Navegador } from '../components/Navegador/Navegador'

export const Portfolio = () => {
    return (
        <>
        <Navegador/>
        <Grid container>
            {
               data.proyectos.map((proyecto) =>( 
                   <Grid item xs={12} md={6}  key={proyecto.id} className='box_porfolio'>
                          Proyecto : {proyecto.title}
                          {/* imagen */}
                          <div style={{width:"100%", height:200}}></div>
                          descripcion:{proyecto.description}
                    </Grid>

             )   
             )   
            }
            
        </Grid>
        </>
    )
}
