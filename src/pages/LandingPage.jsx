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

        <button className="sign-up" onClick={handleClick}>
          Registrarse
        </button>

        <p className="join-us"> Unete a nuestra comunidad </p>
      </div>
      <img
        src={require("../img/garden.png")}
        alt="gardener"
        className="gardener"
      />
      <div className="shadow"></div>
      <div className="curve"></div>
    </>
  );
};

export default LandingPage;
