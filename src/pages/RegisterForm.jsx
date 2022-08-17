import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Grid, Container, Paper,Typography,TextField,Button, CssBaseline } from '@mui/material'
import SpaSharpIcon from '@mui/icons-material/SpaSharp';



const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [legendUser, setLegendUser] = useState("");

  const navigate = useNavigate()

  const [nameAndSurname, setData] = useState("");
  const [errorData, setErrorData] = useState(false);
  const [legendData, setLegendData] = useState("");

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [legendEmail, setLegendEmail] = useState("");

  const [password, setPassword] = useState("");
  const [legendPasword, setLegendPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const emailExp = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
  const passwordExp = /^[a-z0-9_-]{6,18}$/;
  const userExp = /^[a-z0-9_-]{3,15}$/;
  const dataExp = /[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

  const userNameValidation = (event) => {
    setUser(event.target.value);

    if (!userExp.test(user)) {
      setErrorUser(true);
      setLegendUser("por favor escriba un nombre de usuario valido");
    } else {
      setErrorUser(false);
      setLegendUser("ok");
    }
  };

  const dataValidation = (event) => {
    setData(event.target.value);

    if (!dataExp.test(nameAndSurname)) {
      setErrorData(true);
      setLegendData("por favor escriba su nombre y apellido correspondiente");
    } else {
      setErrorData(false);
      setLegendData("ok");
    }
  };

  const emailValidation = (event) => {
    setEmail(event.target.value);

    if (!emailExp.test(email)) {
      setErrorEmail(true);
      setLegendEmail("por favor escriba su email de manera correcta");
    } else {
      setErrorEmail(false);
      setLegendEmail("ok");
    }
  };

  const passwordValidation = (event) => {
    setPassword(event.target.value);

    if (!passwordExp.test(password)) {
      setErrorPassword(true);
      setLegendPassword("contraseña invalida");
    } else {
      setErrorPassword(false);
      setLegendPassword("contraseña valida");
    }
  };

  const handleLogin = (event) => {
    setUser(event.target.value);
    setData(event.target.value);
    setEmail(event.target.value);
    setPassword(event.target.value);

    if (user === "") {
      setErrorUser(true);
      setLegendUser("complete el campo solicitado");
      alert(" ingrese nombre de usuario para el registro por favor ");
    } else if (nameAndSurname === "") {
      setErrorData(true);
      setLegendData("complete el campo solicitado");
      alert(" ingrese nombre y apellido para el registro por favor ");
    } else if (email.length === 0) {
      setErrorEmail(true);
      setLegendEmail("complete el campo solicitado");
      alert(" ingrese un email para completar el registro por favor ");
    } else if (password.length === 0) {
      setErrorPassword(true);
      setLegendEmail(
        "se requiere de una contraseña para el registro solicitado"
      );
      alert(" ingrese los datos requeridos para el registro por favor ");
    } else {
      axios
        .post("http://localhost:3000/auth/register", {
          username: user,
          nameAndSurname,
          email,
          password,
        })
        .then((res) => {
          if (res.data.status === "OK") {
            navigate("/login")
            
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
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
          style: { color: '#fff' }
          }} 
          type="text"
          label="username"
          name="username"
          onChange={userNameValidation}
          error={errorUser}
          helperText={legendUser}
          fullWidth
          color= 'secondary'
          autoFocus
          margin="normal"
          variant="standard"
          required
        />

        <TextField
        InputLabelProps={{
          style: { color: '#fff' }
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

        <TextField sx={{
          marginTop: "30px",
        }}
        InputLabelProps={{
          style: { color: '#fff', bgcolor:'green' }
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

        <TextField sx={{
          marginTop: "30px",
        }}
        InputLabelProps={{
          style: { color: '#fff' }
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
            bgcolor: "transparent",
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
  );
};

export default RegisterForm;
