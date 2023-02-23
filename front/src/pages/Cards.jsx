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
import foto from '../img/Perfil1.jpg'


const cards = [
    {
        id: 1,
        img: {foto},
        name: "Carlos Sanchez",
        email: "carlos@developer.com",
        genderIdentity: "He/Him",
        position: "Front Developer",
        stackDescription: "Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.",
    },
    {
        id: 2,
        img: "../img/Perfil1.png",
        name: "Ana Delgado",
        email: "ana@developer.com",
        genderIdentity: "She/Her",
        position: "Full Stack Developer",
        stackDescription: "Junior Full Stack Developer with experience in HTML5, CSS3, JavaScript, React, PHP and symphony.",
    },
    {
        id: 3,
        img: "../img/Perfil1.png",
        name: "Alba Rus",
        email: "alba@developer.com",
        genderIdentity: "She/Her",
        position: "Back Developer",
        stackDescription: "Junior Back Developer with experience in HTML5, CSS3, JavaScript, PHP, Laravel and MySQL.",
    },
    {
        id: 4,
        img: "../img/Perfil1.png",
        name: "Ainhoa Cala",
        email: "ainhoa@developer.com",
        genderIdentity: "She/Her",
        position: "Front Developer",
        stackDescription: "Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.",
    },
    {
        id: 5,
        img: "../img/Perfil1.png",
        name: "Ainhoa Cala",
        email: "ainhoa@developer.com",
        genderIdentity: "She/Her",
        position: "Front Developer",
        stackDescription: "Junior Front Developer with experience in HTML5, CSS3, JavaScript and React.",
    },
];

const theme = createTheme();

export default function Album() {
  const [cards, setData] = useState([]);
useEffect(() =>{
    sakuraService().then(data => {
    setData(data.sort(function () {return Math.random() - 0.5;}))})
}, []);

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
            {cards.map((card) => (
              
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                > 
                  <div style={{width: "100%", height:"100%"}}>
                      <img style={{width: "100%", height:"100%"}} src={card.img} alt=''></img>
                  </div>
                  
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}