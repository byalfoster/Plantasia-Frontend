
import React from 'react';
import  "../styles/mainStyles.css"
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
   
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  
  
  return (
        <>
                  <div >
            <h2 className="welcome"> 
            ¡te damos la bienvenida!
            Somos una página
            qué te ayudará a mejorar el cuidado de tus plantas
            </h2>
            <button className="sign-up" onClick={handleClick}>Registrarse</button>
            <p> Unete a nuestra comunidad </p>
            <img src={require ('../img/plant.png')} alt='plant' className="plant"/>
          </div>
          <img src={require ('../img/garden.png')} alt='gardener' className="gardener"/>
          <div className="shadow"></div>
          <div className="curve"></div>
        </>
    );
}

export default LandingPage;

