import InfoCard from "../components/InfoCard";
import React from "react";
import "../styles/InfoCard.css";

const developers = [
  {
    name: "Joaquin Medina",
    linkedin: "https://www.linkedin.com/in/joaquin-medina/",
    github: " https://github.com/joaquin-medina ",
    email: "joaquinmedinadev@gmail.com",
  },

  {
    name: "Alberto Gutiérrez",
    linkedin:
      "https://www.linkedin.com/in/alberto-mario-gutierrez-rodriguez-1aa702248/",
    github: " https://github.com/byalfoster ",
    email: "kanon.gr2006@gmail.com",
  },

  {
    name: "Tomas Catalano",
    linkedin: "",
    github: "https://github.com/RaonHenituse",
    email: "tomas.a.catalano@gmail.com",
  },

  {
    name: "Lautaro Larragueta",
    linkedin: "https://www.linkedin.com/in/lautaro-larragueta-b70361229/",
    github: "https://github.com/laokatana",
    email: "lautaro.s.larragueta@gmail.com",
  },

];

const AboutUs = () => {
  return (
    <div className="infocard">
      {developers.map((person, index) => {
        return <InfoCard key={index} name={person.name} />;
      })}
    </div>
  );
};

export default AboutUs;
