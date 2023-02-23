import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ActionAreaCard({card, handleClick}) {
  
  return (
    <>
    <AppBar />
      <Card sx={{ maxWidth: 785 }}>
        <CardActionArea>
          <img src={card.img} alt="Logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.stackDescription}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              {card.projectDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={ () => handleClick(card) }/>
      </Card>
    <Footer />
    </>

  );
}
