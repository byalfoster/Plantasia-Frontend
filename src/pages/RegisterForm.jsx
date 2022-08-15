import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [legendUser, setLegendUser] = useState("");
  const [logged, setIsLogged] = useState("");

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
  const userExp = /^[a-z0-9_-]{3,8}$/;
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
    <div className="form">
      <h1>REGISTRO</h1>
      <form>
        <TextField
          type="text"
          label="username"
          name="username"
          onChange={userNameValidation}
          error={errorUser}
          helperText={legendUser}
          fullWidth
          autoFocus
          color="primary"
          margin="normal"
          variant="outlined"
          required
        />

        <TextField
          type="text"
          label="nombre y apellido"
          name="nombre y apellido"
          onChange={dataValidation}
          error={errorData}
          helperText={legendData}
          fullWidth
          autoFocus
          color="primary"
          margin="normal"
          variant="outlined"
          required
        />

        <TextField
          label="email"
          name="email"
          onChange={emailValidation}
          error={errorEmail}
          helperText={legendEmail}
          fullWidth
          autoFocus
          color="primary"
          margin="normal"
          variant="outlined"
          required
        />

        <TextField
          label="password"
          type="password"
          onChange={passwordValidation}
          error={errorPassword}
          helperText={legendPasword}
          fullWidth
          autoFocus
          color="primary"
          margin="normal"
          variant="outlined"
          required
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
