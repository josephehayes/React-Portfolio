import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NBATrackerCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        href="http://nba-player-tracker-production.up.railway.app"
        target='_blank'
      >
        <CardMedia
          component="img"
          height="140"
          image="static/NBA-Tracker-SS.png"
          alt="NBA Player Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NBA Player Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            My first big project using Bulma, localstorage, JS, and third-party APIs to look up and locally save lists of NBA players, the team they play on, and their stats.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NBATrackerCard;