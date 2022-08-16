import React from "react";
import PlantCard from "../components/PlantCard";
import Profile from "../components/Profile";
import Grid from "@mui/material/Grid";
import "../styles/ProfilePlantStyle.css";

const profile = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Profile />
        </Grid>
        </Grid>
        <Grid
          container
          my={5}
          rowSpacing={2}
          columnSpacing={3}
          direction="row"
        >
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
