import { Grid, Link } from '@mui/material';
import React from 'react'
import { Portfolio } from '../../pages/Portfolio';
import { NavLink } from 'react-router-dom';
import styles from './Navegador.module.css'
import 'animate.css';

export const Navegador = () => {
  return (
    <Grid container className='navegador' style={{height:70}} >
        <Grid item xs={12} md={4} >
          <h1  className="animate__animated animate__bounce">
            Leonardo Luchini
        </h1>
          {/* Leonardo <strong> Luchini</strong> */}
           
        </Grid>
        <Grid item  xs={12} md={8} display={'flex'} justifyContent={'flex-end'}>
            <ul >
                <NavLink  to={'/'} className={styles.link}
                  style={({isActive}) =>({
                  color:isActive ? 'red' : 'black',})} 
                  >Inicio</NavLink>
                <NavLink  to={'/acercade'}  className={styles.link}   style={({isActive}) =>({
                  color:isActive ? 'red' : 'black',})} >Acerca de</NavLink>
                <NavLink  to={'/portfolio'}  className={styles.link}   style={({isActive}) =>({
                  color:isActive ? 'red' : 'black',})} >Portfolio</NavLink>
                <NavLink  to={'/contacto'}   className={styles.link}   style={({isActive}) =>({
                  color:isActive ? 'red' : 'black',})} >Contacto</NavLink>
            </ul>
        </Grid>
    </Grid>
  )
}

