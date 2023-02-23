// import * as React from 'react';
// import { styled } from '@mui/material/styles';

// import { Grid } from '@mui/material';

// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
// });

// export default function ComplexGrid() {
//     return (
//         <Grid container spacing={2}>
//          <Grid item xs={4}>
//                 <Item><p className='ParrafoInicio'> Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
//                     Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
//                     Jarl!! </p> </Item>
//             </Grid>
//             <Grid item xs={6}>
//                 <Item> <Img alt="complex" className='ana-imagen3' src={Inicio} /> </Item>

//             </Grid>

//        </ Grid>
           


    

//     );
// }

import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Inicio from '../img/Inicio';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 800,
    margin: "0 auto",
  },
  text: {
    flexBasis: "50%",
    padding: 20,
    boxSizing: "border-box",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 1.5,
    margin: 0,
  },
  image: {
    flexBasis: "50%",
  },
  img: {
    maxWidth: "100%",
  },
}));

function TextWithImage() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.container}>
          <div className={classes.text}>
            <Typography variant="h5" component="h2" className={classes.title}>
              Título del texto
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              quis mi et velit accumsan faucibus. Nulla facilisi.
            </Typography>
          </div>
          <div className={Ini}>
            <img
              className={Inicio}
              src="../i"
              alt="Placeholder"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default TextWithImage;