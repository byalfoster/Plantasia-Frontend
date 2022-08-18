import React from "react";
import PlantCard from "../components/PlantCard";
import ProfileComponent from "../components/ProfileComponent";
import Grid from "@mui/material/Grid";
import "../styles/ProfilePlantStyle.css";

import PostPlant from "../components/PostPlant";

const ProfileContent =[
  {
    username:"Byalfoster",
    name: "KALANCHOE CALANDIVA",
    imageUrl: "https://www.elmueble.com/medio/2019/05/28/kalanchoe-calandiva-abundante-y-compacta-floracion_2b697609_1024x768.jpg",
    description: "Lo que más llama la atención de la Kalanchoe calandiva y la diferencia del resto de variedades son sus flores, dispuestas en ramilletes dobles de diferentes colores. Como planta crasa que es, sus hojas son gruesas, carnosas y de un verde brillante.",
    tip: "Precisa pocos cuidados, empezando por el riego, que debe ser ocasional y solo cuando la tierra esté seca, porque es muy sensible al exceso de agua. Agradece una zona iluminada y un ambiente seco.",
  },
]
const ProfileContent1 =[
  {
    username:"Byalfoster",
    name: "LAVANDA",
    imageUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/cultivar-lavanda-en-maceta-evis_disha_.jpg",
    description: "La lavanda (Lavandula) es una planta aromática de bellas flores malvas que se caracteriza por sus propiedades calmantes, hasta el punto que es una planta que ayuda a conciliar el sueño. Su inconfundible aroma, además, ahuyenta mosquitos y polillas, siendo habitual usar los racimos de sus flores malvas en los armarios.",
    tip: "Es una planta que agradece estar en el exterior, porque necesita sol directo para su buen crecimiento.  ",
  },
]
const ProfileContent2 =[
  {
    username: "Byalfoster",
    name: "POTUS",
    imageUrl:
      "https://t1.ev.ltmcdn.com/es/posts/6/8/6/potus_o_poto_cuidados_686_orig.jpg",
    description:
      "Si eres de los que tienes un conocimiento bajo tirando a nulo de plantas, esta seguro que la conoces. Y es que el poto (Pothus) es una clásico entre las plantas de interior. A pesar de ser una trepadora, su cultivo es sobre todo en maceta dentro de casa porque no tolera el frío.",
    tip: "Puede alcanzar una altura máxima de 20 metros si dispone de un soporte por el que trepar. Sus hojas, con zonas en color crema o tonos amarillos, rompen la monotonía del verde uniforme. Agradece zonas luminosas, pero también puede crecer en semisombra.",
  },
]
const ProfileContent3 =[
  {
    username: "Byalfoster",
    name: "ORQUÍDEA",
    imageUrl:
      "https://www.jardineriaon.com/wp-content/uploads/2021/12/phalaenopsis-en-flor.jpg",
    description:
      "La mala fama de planta delicada la precede, aunque existen variedades, como la Phalaenopsis, que son más fáciles de cuidar. Durante la floración, la orquídea (Orchidaceae) es una planta de gran belleza por sus flores de muchos colores e incluso algunas moteadas.",
    tip: "Una vez ha terminado la floración es muy importante podarla para favorecer una nueva floración. Además, convendrá abonarla a menudo mientras esté echando flores. Agradece una temperatura constante entre los 15 y los 30 grados y luz, pero sin que le dé el sol directo. Para regarla, sumérgela en agua, para que se empapen sus raíces. Pero ojo, porque un exceso de agua podría matarla, tras el riego drénala bien.",
  },
]
const ProfileContent4 =[
  {
    username: "Byalfoster",
    name: "PLANTA DE JADE",
    imageUrl:
      "https://www.guiadejardineria.com/wp-content/uploads/2015/11/cultivo-y-cuidados-del-arbol-de-jade-05-e1446728868811.jpg",
    description:
      "La planta de Jade (Crassula ovalata) es una de las suculentas más populares. Es muy longeva y de crecimiento lento, por lo que con los cuidados adecuados puede acompañarte media vida. ",
    tip: "Necesita luz abundante, llegando a tolerar el sol directo, siempre que no sea verano o las temperaturas sean muy elevadas. En invierno y otoño produce pequeñas flores en racimos compuestas por cinco pétalos blancos. El riego debe ser moderado y en invierno bastante espaciado. ",
  },
]
const ProfileContent5 =[
  {
    username:"Byalfoster",
    name: "MARGARITA",
    imageUrl: "https://jardineriapractica.com/wp-content/uploads/2020/04/Margarita.jpg",
    description: "hay más de 140 especies repartidas por todo el mundo. Aunque sus flores pueden presentarse en diferentes colores, la más común es de floración blanca con el botón amarillo. Es una planta que crecerá sin grandes problemas, por lo que es ideal para los primerizos.",
    tip: ":Agradece un terreno pobre, mucho sol y agua calcárea. El riego debe ser constante, pero sin excesos, de hecho deberás dejar que la tierra se seque entre riego y riego.",
  },
]
const ProfileContent6 =[
  {
    username:"Byalfoster",
    name: "GERANIO",
    imageUrl: "https://ornamentalis.com/wp-content/uploads/2019/08/Que-hacer-para-que-los-geranios-florezcan.jpg",
    description: "El geranio (Pelargonium) es el rey indiscutible de terrazas y balcones, porque necesita mucho sol y sus grandes flores multicolor llenan de alegría y vida el exterior.",
    tip: "Para que esta planta pueda florear de manera abundante y constante, necesitará al menos seis horas diarias de luz. Y si necesita sol para florecer, también necesita agua constante, sobre todo durante los meses más calurosos. ",
  },
]
const ProfileContent7 =[
  {
    username:"Byalfoster",
    name: "BUGANVILLA",
    imageUrl: "https://t2.uc.ltmcdn.com/es/posts/6/5/6/como_cuidar_una_buganvilla_27656_orig.jpg",
    description: "La lavanda (Lavandula) es una planta aromática de bellas flores malvas que se caracteriza por sus propiedades calmantes, hasta el punto que es una planta que ayuda a conciliar el sueño. Su inconfundible aroma, además, ahuyenta mosquitos y polillas, siendo habitual usar los racimos de sus flores malvas en los armarios.",
    tip: "Es una planta que agradece estar en el exterior, porque necesita sol directo para su buen crecimiento.  ",
  },
]


const profile = (props) => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={3} direction="row">
        <Grid item xs={3}>
          <ProfileComponent />
        </Grid>
        <Grid item xs={9}>
          <PostPlant />
        </Grid>
      </Grid>

      <Grid container my={2} rowSpacing={2} columnSpacing={3} direction="row">
        <Grid item xs={3}>
        {ProfileContent.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent1.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent2.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent3.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent4.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent5.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent6.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
        <Grid item xs={3}>
        {ProfileContent7.map((plant, index) => {return <PlantCard
            key={index}           
            username={plant.username}
            name={plant.name}
            imageUrl={plant.imageUrl}
            description={plant.description}
            tip={plant.tip}
        /> })}  
        </Grid>
      </Grid>
    </div>
  );
};

export default profile;
