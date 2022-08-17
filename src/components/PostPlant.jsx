import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PostPlant() {
  return (
    <Box
      component="form"
      sx={{
        color: "white",
        p: 7,
        display: "flex",
        borderRadius: 2,
        bgcolor: "#004d40",
        maxWidth: "auto",
        "& > :not(style)": { m: 1, maxWidth: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
        id="filled-basic"
        label="Planta"
        variant="filled"
        value=""
      />
      <TextField
        sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
        id="filled-basic"
        label="Descripción"
        variant="filled"
      />
      <TextField
        sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
        id="filled-basic"
        label="tip"
        variant="filled"
      />
      <TextField
        sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
        id="filled-basic"
        label="Url de imagen"
        variant="filled"
      />
      <Button sx={{ color: "white" }} variant="outlined">
        Enviar
      </Button>
    </Box>
  );
}
