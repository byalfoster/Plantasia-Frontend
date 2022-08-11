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
        {people.map((person, index) => {

            return <InfoCard key={index} name={person.name }/>
        })}
    </div>
    );
}

export default AboutUs;
