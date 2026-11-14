import { Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'

export const Footer = () => {
  return (
    <Grid container className='footer'>
        <Grid item xs={12}>
            <a  href="https://github.com/luchinileo" target='_blank'>
              <GitHubIcon fontSize='large' style={{fontSize:'50px', color:'red'}}className='icon'/>
            </a>
            <a href="https://www.linkedin.com/in/leonardo-luchini-13b127262/" target='_blank' >
              <LinkedInIcon color='info' fontSize='large' style={{fontSize:'50px'}}className='icon'/>

        
            </a>

        </Grid>
    </Grid>
  )
}
