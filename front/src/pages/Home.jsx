
import React, { component } from 'react';
import Inicio from '../img/Inicio.png';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';




class Home extends React.Component{
  render() {
    return (
      
      <div className='ana-contenedor' container spacing={2}>
      <AppBar/>  
        

       <img className='ana-imagen3' src={Inicio} alt="corazon de neon" />
     
      <Footer/>
     </div>
    
     
    );
  }
}


export default Home;
