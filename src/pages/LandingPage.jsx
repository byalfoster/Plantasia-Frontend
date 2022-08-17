import React from "react";
import "../styles/mainStyles.css";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div>
        <h2 className="welcome">
          ¡te damos la bienvenida!
          <br />
          Somos una página qué te ayudará <br />a mejorar el cuidado de tus
          plantas
        </h2>

        <button className="sign-up" onClick ={handleClick}>
          Registrarse
        </button>
      </div>
      <img
        src={require("../img/gardener.png")}
        alt="gardener"
        className="gardener"
      />
    </>
  );
};

export default LandingPage;
