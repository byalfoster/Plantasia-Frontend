import { useState } from "react";

import axios from "axios";
import { Box, TextField, Button } from "@mui/material";

const PostPlantsLao = () => {
  const [namePlant, setPlants] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTip] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleNamePlant = (event) => {
    setPlants(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleTips = (event) => {
    setTip(event.target.value);
  };

  const handleUrlImg = (event) => {
    setImgUrl(event.target.value);
  };

  const handleClickPostPlant = (event) => {
    setPlants(event.target.value);
    setDescription(event.target.value);
    setTip(event.target.value);
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

      <TextField
        type="text"
      
      />
      <TextField/>
      <TextField/>
      <TextField/>
      <Button>
        
      </Button>

    
    </div>
  );
};

export default PostPlantsLao;
