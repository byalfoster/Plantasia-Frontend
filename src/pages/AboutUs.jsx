import InfoCard from "../components/InfoCard";
import React from "react";
import "../styles/InfoCard.css";



const developers = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/103076907?v=4",
    name: "Joaquin Medina",
    linkedin: "https://www.linkedin.com/in/joaquin-medina/",
    github: " https://github.com/joaquin-medina ",
    email: "mailto:joaquinmedinadev@gmail.com",
  },

  {
    imageUrl: "https://avatars.githubusercontent.com/u/104470261?v=4" ,
    name: "Alberto Gutiérrez",
    linkedin:"https://www.linkedin.com/in/alberto-mario-gutierrez-rodriguez-1aa702248/",
    github: " https://github.com/byalfoster ",
    email: "mailto:albertogutierrezrodriguezdev@gmail.com",
  },

  {
    imageUrl: "https://avatars.githubusercontent.com/u/104871004?v=4",
    name: "Tomas Catalano",
    linkedin: "",
    github: "https://github.com/RaonHenituse",
    email: "mailto:tomas.a.catalano@gmail.com",
  },

  {
    
    imageUrl: "https://avatars.githubusercontent.com/u/87925738?v=4",
    name: "Lautaro Larragueta",
    linkedin: "https://www.linkedin.com/in/lautaro-larragueta-b70361229/",
    github: "https://github.com/laokatana",
    email: "mailto:lautaro.s.larragueta@gmail.com",
  },

];

const AboutUs = () => {
  return (
     


    <div className="infocard">
      <div className="Weare">
      <h2>
        SOMOS PLANTASIA
      </h2>
      <p>
        Somos un grupo de programadores web fullstack
         que decidió crear una pagina para que puedas mejorar
         el cuidado de tus plantas
      </p>
      </div>
      {developers.map((person, index) => { return <InfoCard 
      key={index} 
      name={person.name} 
      imageUrl={person.imageUrl} 
      linkedin={person.linkedin}
      github = {person.github}
      email ={person.email} />;})}
      </div>

  );
};

export default AboutUs;
