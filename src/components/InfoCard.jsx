import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function InfoCard(props) {
  return (
    <Card sx={{ maxWidth: 250, bgcolor: "#43a047", color: "white", boxShadow: 3 }}>
      <CardMedia
        component="img" 
        height="150"
        image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="profile"
      />
      <CardContent>
        <Typography sx={{textAlign:'center', fontSize: 24 }} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography >
        <Typography sx={{color:'white', textAlign:'center'}} variant="body2" color="text.secondary">
        Programador Web Fullstack<br/>
        </Typography>
      </CardContent>
      <CardActions >
        <Button sx={{color:'white'}} size="big"><LinkedInIcon sx={{ fontSize: 30 }} /></Button>
        <Button sx={{color:'white'}} size="big"><GitHubIcon sx={{ fontSize: 30 }} /></Button>
        <Button sx={{color:'white'}} size="big"><EmailIcon sx={{ fontSize: 30 }} /></Button>
      </CardActions>
    </Card>
  );
}
