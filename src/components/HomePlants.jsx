import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';


export default function HomePlants(props)
 {
    return (
      <Card sx={{ maxWidth: 345, bgcolor: '#dcedc8', borderRadius:2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={props.imageUrl}
            alt="image source"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
                {props.description}
            </Typography>
            
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }


