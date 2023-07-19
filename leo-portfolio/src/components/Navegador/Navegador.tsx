import { Grid, Link } from '@mui/material';
import React from 'react'
import { Portfolio } from '../../pages/Portfolio';
import { NavLink } from 'react-router-dom';
import styles from './Navegador.module.css'

export const Navegador = () => {
  return (
    <Grid container style={{height:60}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} md={4}>
          <h1>
          Leonardo <strong> Luchini</strong>
        </h1>
           
        </Grid>
        <Grid item xs={12} md={8} display={'flex'} justifyContent={'flex-end'}>
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

