import * as React from 'react';
import { styled } from '@mui/material/styles';
import imgInicio from '../img/imgInicio.png';
import { Grid } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <Grid container spacing={2}>
         <Grid item xs={4}>
                <Item><p className='ParrafoInicio'> Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
                    Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
                    Jarl!! </p> </Item>
            </Grid>
            <Grid item xs={6}>
                <Item> <Img alt="complex" className='ana-imagen3' src={imgInicio} alt="corazon de neon" /> </Item>

            </Grid>

       </ Grid>
           


    

    );
}