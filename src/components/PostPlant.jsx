import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

import axios from "axios";

export default function PostPlant() {
  const [namePlant, setNamePlant] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setNamePlant("");
    setDescription("");
    setTips("");
    setImgUrl("");
  }, []);

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
    event.preventDefault();
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

    axios
      .post(
        "http://localhost:3000/api/plants",
        { namePlant, description, tips, imgUrl },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              window.localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => err.response.message);
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
          onChange={handleDescription}
        />
        <TextField
          sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
          id="filled-basic"
          label="tip"
          variant="filled"
          onChange={handleTips}
        />
        <TextField
          sx={{ bgcolor: "whitesmoke", fontStyle: "italic" }}
          id="filled-basic"
          label="Url de imagen"
          variant="filled"
          onChange={handleImgUrl}
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
