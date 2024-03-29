import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';

const InsulinkCard = () => {
  return (
    <Paper sx={{ padding: '5%' }}>
      <Card
      >
        <CardActionArea
          href="http://insulink-main.up.railway.app/"
          target='_blank'
        >
          <CardMedia
            component="img"
            height="140"
            image="/static/projectPics/InsuLink-SS.png"
            alt="InsuLink"
            className="cardImg"
          // https://insulink-main.up.railway.app/
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              InsuLink
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A group project app using React, MUI, MongoDB, and GraphQL to solve an issue parents with T1D children face every year.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}

export default InsulinkCard;