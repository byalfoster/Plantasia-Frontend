import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function PostPlant() {
  const [namePlant, setNamePlant] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleNamePlant = (event) => {
    setNamePlant(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleTips = (event) => {
    setTips(event.target.value);
  };

  const handleImgUrl = (event) => {
    setImgUrl(event.target.value);
  };

  const handleClick = (event) => {
    setNamePlant(event.target.value);
    setDescription(event.target.value);
    setTips(event.target.value);
    setImgUrl(event.target.value);
    console.log({
      namePlant,
      description,
      tips,
      imgUrl,
    });
  };

  return (
    <div>
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
          onChange={handleNamePlant}
        />
        <TextField
          sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
          id="filled-basic"
          label="Descripción"
          variant="filled"
          onChangue={handleDescription}
        />
        <TextField
          sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
          id="filled-basic"
          label="tip"
          variant="filled"
          onChangue={handleTips}
        />
        <TextField
          sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
          id="filled-basic"
          label="Url de imagen"
          variant="filled"
          onChangue={handleImgUrl}
        />
        <Button
          sx={{ color: "white" }}
          variant="outlined"
          onClick={handleClick}
        >
          Enviar
        </Button>
      </Box>
    </div>
  );
}
