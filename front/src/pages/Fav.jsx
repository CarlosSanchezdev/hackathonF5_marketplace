import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const theme = createTheme();

function Fav({favourites, setCard, card}) {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
    
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        
          <Grid container spacing={4}>
            {favourites.map((card) => (
              
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Link to="/ViewCard" onClick={ () => setCard(card) } >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                > 
                  <CardMedia
                    component="img"
                    src={card.img}
                    alt="random"
                  />
                  
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.stackDescription}
                    </Typography>
                  </CardContent>
                  
                </Card>
                </Link>
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Fav
