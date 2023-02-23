
import React, { component } from 'react';
import Inicio from '../img/Inicio.png';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import inicio from '../img/Inicio.png'



class Home extends React.Component{
  render() {
    return (
      
      <div className='ana-contenedor' container spacing={2}>
      <AppBar/>  
        

       <Grid container>

        <Grid item md={3}>
            <img className='imagen-inicio' src={inicio}/>
        </Grid>
        <Grid item md={6}>
           <p className='parrafo-principal'>Conectamos <u>proyectos</u>con personas, <strong>personas</strong> con proyectos</p>
           <p className='parrafo-secundario'>Nuestra misión es poder ofrecerte un mercado de personas talentosas y conscientes y ayudarte en el proceso de selección.</p>
            <br></br>
          <p className='parrafo-tercero'>Nuestra visión es la de un mundo en el que los proyectos conscientes sí son posibles. </p>
          <br></br>
          <p className='parrafo-cuarto'><span className='subrayado'>Nuestro valor radica en nuestro método.</span></p> 
        </Grid>

       </Grid>
     
      <Footer/>
     </div>
    
     
    );
  }
}


export default Home;
