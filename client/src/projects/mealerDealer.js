import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';

const MealerDealerCard = () => {
  return (
    <Paper sx={{ padding: '5%' }}>
      <Card
      // sx={{ maxWidth: 345 }}
      >
        <CardActionArea
          href="http://the-mealer-dealer-production-c695.up.railway.app/"
          target='_blank'
        >
          <CardMedia
            component="img"
            height="140"
            image="/static/projectPics/Mealer-Dealer-SS.png"
            alt="The Mealer Dealer"
            className="cardImg"
          // https://the-mealer-dealer-production-c695.up.railway.app/
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Mealer Dealer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A meal prep app using MySQL, Sequelize as the ORM, JS, bCrypt, and Handlebars to help busy users organize and find new recipes.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}

export default MealerDealerCard;