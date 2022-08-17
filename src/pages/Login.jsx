import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Home from "../pages/Home"
import Profile from "../pages/Profile";
import { useLocation } from "react-router-dom";

const Login = () => {
  /*
  useEffect(() => {
    
    if( isLogged){
      navigate("/")
    }
    
  })

   <Route
          path="/profile"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Profile />
            </ProtectedRoute>
          }
        />

  */

 //const navigate = useNavigate()
 const location = useLocation();
 
 useEffect(() => {
   setIsLogged(window.localStorage.getItem("token"));
   
  }, [location]);
  
  
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [legendEmail, setLegendEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [legendPasword, setLegendPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("token")
  );
  //const [isLogged, setIsLogged] = useState(false);
  //const [token, setToken] = useState("");

  const emailExp = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
  const passwordExp = /^[a-z0-9_-]{6,18}$/;

  const emailValidation = (event) => {
    event.preventDefault();
    setEmail(event.target.value);

    if (!emailExp.test(email)) {
      setErrorEmail(() => true);
      setLegendEmail("por favor escriba su email de manera correcta");
    } else {
      setErrorEmail(false);
      setLegendEmail("ok");
    }
  };

  const passwordValidation = (event) => {
    event.preventDefault();
    setPassword(event.target.value);

    if (!passwordExp.test(password)) {
      setErrorPassword(() => true);
      setLegendPassword("contraseña invalida");
    } else {
      setErrorPassword(false);
      setLegendPassword("contraseña valida");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setEmail(event.target.value);
    setPassword(event.target.value);

    if (email === "") {
      setErrorEmail(() => true);
      setLegendEmail("complete el campo solicitado");
      alert(" ingrese los datos requeridos para el registro por favor ");
    } else if (password.length === 0) {
      setErrorPassword(() => true);
      setLegendEmail("complete el campo solicitado");
      alert(" ingrese los datos requeridos para el registro por favor ");
    } else {
      //implementar la llamada al back con axios
      //guardar token que me va a devolver la llamada en localStorage
      /**
       * window.localStorage.setItem("token",JSON.stringify(res.data.token) )
       * cuando hago logout hago window.localStorage.removeItem("token")
       */

      axios
        .post(
          "http://localhost:3000/auth/login",
          { email, password },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                window.localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status === "logged in") {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem(
              ["email", "password"],
              JSON.stringify({ email, password })
            );
            setIsLogged(() => true);
            console.log(res.data.token);
            console.log("estas adentro de plantasia");
          }
        })
        .catch((err) => {
          console.log(err.name.message);
        });
    }
  };

  return (
    <div>
      {isLogged ? (
        <Profile />
        
      ) : (
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
                  sx={{
                    marginBottom: "30px",
                    marginTop: "30px",
                  }}
                  fullWidth
                  autoFocus
                  color="secondary"
                  margin="normal"
                  variant="standard"
                  label="Email"
                  name="Email"
                  onChange={emailValidation}
                  error={errorEmail}
                  helperText={legendEmail}
                />
                <TextField
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  fullWidth
                  autoFocus
                  type="password"
                  color="secondary"
                  margin="normal"
                  variant="standard"
                  label="Password"
                  name="password"
                  onChange={passwordValidation}
                  error={errorPassword}
                  helperText={legendPasword}
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
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
      )}
    </div>
  );
};
export default Login;














