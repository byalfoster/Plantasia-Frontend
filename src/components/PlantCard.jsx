import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PlantCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        color: "white",
        bgcolor: "#004d40",
        borderRadius: 2,
      }}
    >
      <CardHeader
        sx={{ color: "white" }}
        avatar={
          <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton sx={{ color: "whitesmoke" }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.username}
        subheader={props.name}
      />
      <CardMedia
        sx={{
          padding: "10px",
        }}
        component="img"
        height="auto"
        image={props.imageUrl}
        alt="helecho nido de pajaro"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ color: "white" }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          sx={{ color: "white" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Consejos:</Typography>
          <Typography paragraph>{props.tip}</Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
