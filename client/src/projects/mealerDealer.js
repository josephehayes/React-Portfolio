import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MealerDealerCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="The Mealer Dealer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Mealer Dealer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A meal prep app using MySQL, [css package?], JS, and [something else] to help busy users organize and find new recipes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MealerDealerCard;