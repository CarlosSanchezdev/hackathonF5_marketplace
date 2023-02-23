import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

export default function ActionAreaCard({card, setCard}) {
  console.info(card)
  return (
    <>
    <AppBar />
    <Card sx={{ maxWidth: 785 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          scr={card.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.stackDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Footer />
    </>

  );
}
