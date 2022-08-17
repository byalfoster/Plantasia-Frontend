import React from "react";
import PlantCard from "../components/PlantCard";
import Profile from "../components/Profile";
import Grid from "@mui/material/Grid";
import "../styles/ProfilePlantStyle.css";
import PostPlant from "../components/PostPlant";

const profile = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={3} direction="row">
        <Grid item xs={3}>
          <Profile />
        </Grid>
        <Grid item xs={9}>
          <PostPlant />
        </Grid>
      </Grid>

      <Grid container my={2} rowSpacing={2} columnSpacing={3} direction="row">
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
        <Grid item xs={3}>
          <PlantCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default profile;
