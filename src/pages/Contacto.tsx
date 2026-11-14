import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Navegador } from '../components/Navegador/Navegador'
import { Footer } from '../components/Footer/Footer'

export const Contacto = () => {
  return (
    <>
    <Navegador/>
    <div >
    <Card  className='tarjeta' sx={{ maxWidth: 345 }} >
      <CardActionArea >
        <CardMedia className='img'
          component="img"
          height="240"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Leonardo Luchini
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          telefono: 02901 15649478
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Localidad: Ushuaia
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          LinkedIn:	 Leonardo Luchini
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Github:    luchinileo
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          email: leoluchini2022@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      <Footer/>
    </div> 
    </>
  )
}
