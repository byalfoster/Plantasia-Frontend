import InfoCard from '../components/InfoCard';
import React from 'react';
import "../styles/InfoCard.css"

//const linkGitHubFoster = ""

const people = [
    { name: 'Joaquin Medina'},
    { name: 'Alberto Gutiérrez'},
    { name: 'Tomas Catalano'},
    { name: 'Lautaro Larragueta'},
]



const AboutUs = () => {
  return (

    <div className='infocard'>
        <div className='Weare'>
        <h2>SOMOS PLANTASIA</h2>
        <p> Un grupo de desarrolladores web fullstack, que decidio hacer 
        una pagina web<br/> sobre el cuidado de plantas, tenemos conocimientos tanto en backend como en frontend<br/>
        para contactarnos aqui nuestras redes sociales</p>
        </div>

        {people.map((person, index) => {

            return <InfoCard key={index} name={person.name }/>
        })}
    </div>
    );
}

export default AboutUs;
