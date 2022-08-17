import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@mui/material";
import SpaSharpIcon from "@mui/icons-material/SpaSharp";

const PostPlants = () => {
  return (
    <div>

<div>
      <Grid container component="main">
        <CssBaseline />
        <Container
          component={Paper}
          elevation={5}
          maxWidth="xs"
          sx={{
            bgcolor: "#004d40",
            borderRadius: 2,
          }}
        >
          <div>
            <SpaSharpIcon
              sx={{
                fontSize: "30px",
                color: "white",
                position: "relative",
                top: "85px",
                left: "95px",
              }}
            />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                fontSize: "30px",
                color: "white",
                marginTop: "50px",
                marginBottom: "40px",
                marginLeft: "30px",
                fontFamily: "Roboto",
              }}
            >
              {" "}
              PLANTASIA
            </Typography>
            <form>
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                type="text"
                label="username"
                name="username"
                onChange={userNameValidation}
                error={errorUser}
                helperText={legendUser}
                fullWidth
                color="secondary"
                autoFocus
                margin="normal"
                variant="standard"
                required
              />

              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                type="text"
                label="nombre y apellido"
                name="nombre y apellido"
                onChange={dataValidation}
                error={errorData}
                helperText={legendData}
                fullWidth
                autoFocus
                color="secondary"
                margin="normal"
                variant="standard"
                required
              />

              <TextField
                sx={{
                  marginTop: "30px",
                }}
                InputLabelProps={{
                  style: { color: "#fff", bgcolor: "green" },
                }}
                label="email"
                name="email"
                onChange={emailValidation}
                error={errorEmail}
                helperText={legendEmail}
                fullWidth
                autoFocus
                color="secondary"
                margin="normal"
                variant="standard"
                required
              />

              <TextField
                sx={{
                  marginTop: "30px",
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label="password"
                type="password"
                onChange={passwordValidation}
                error={errorPassword}
                helperText={legendPasword}
                fullWidth
                autoFocus
                color="secondary"
                margin="normal"
                variant="standard"
                required
              />

              <Button
                sx={{
                  marginTop: "50px",
                  marginBottom: "100px",
                  bgcolor: "#00796b",
                  width: "50%",
                  marginLeft: "100px",
                  fontSize: "20px",
                }}
                width="50%"
                left="50%"
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                Registrarse
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </div>


    </div>
  )
}

export default PostPlants