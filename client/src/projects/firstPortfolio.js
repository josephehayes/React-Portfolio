import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FirstPortfolioCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="First Portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My First Portfolio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            My first portfolio, written in vanilla HTML and CSS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FirstPortfolioCard;