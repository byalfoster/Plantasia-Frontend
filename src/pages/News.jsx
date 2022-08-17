import React from "react";
import PlantCard from "../components/PlantCard";
import "../styles/newsStyles.css";

const plantPost = [
  {
    username: "Joa912",
    name: "nardo",
    imageUrl:
      "https://media.floresfrescasonline.com/product/nardos-en-maceta-800x800.jpeg",
    description:
      "El nardo (cuyo nombre científico es Polianthes tuberosa) es una planta bulbosa con flores blancas o rosadas, con un intenso y agradable aroma. Se trata de una planta muy fácil de cuidar y la época ideal para cultivarlas es en primavera, cuando han terminado las geladas y el frío. ",
    tip: "Requieren un riego moderado, pero sin encharcamientos. De hecho, toleran mejor las épocas de sequía. ",
  },
  {
    username: "Gusti84",
    name: "VIOLETA AFRICANA",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/27/saintpaulia_8f09c284_800x800.jpg",
    description:
      "Por su tamaño reducido, la Violeta africana o Saintpaulia es una planta perfecta para decorar cualquier rincón luminoso –que no soleado– de la casa. Aunque presenta diferentes colores, el más habitual es el morado intenso",
    tip: "Con la luz adecuada, puede llegar a florecer durante todo el año. Los riegos hay que hacerlos desde abajo: déjala en un plato con agua durante unas horas y después retira el exceso, ya que uno de sus principales enemigos es, precisamente, demasiada agua.",
  },
  {
    username: "Matute12",
    name: "ROSA DEL DESIERTO",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/26/rosa-del-desierto-depositphotos-38910763-l-2015_f3935f7a_1000x1000.jpg",
    description:
      "La rosa del desierto es una roca sedimentaria evaporítica formada en los desiertos, de ahí su nombre, cuando se forman diversas capas de yeso, agua y arena. Forma cristales muy bellos que recuerdan la forma de una flor, de ahí la denominación de rosa. Suele ser de color arena",
    tip: "Con la luz adecuada, puede llegar a florecer durante todo el año. Los riegos hay que hacerlos desde abajo: déjala en un plato con agua durante unas horas y después retira el exceso, ya que uno de sus principales enemigos es, precisamente, demasiada agua.",
  },
  {
    username: "Gonza23",
    name: "POTUS",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/25/poto_d7e8df0c_800x800.jpg",
    description:
      "Si eres de los que tienes un conocimiento bajo tirando a nulo de plantas, esta seguro que la conoces. Y es que el poto (Pothus) es una clásico entre las plantas de interior. A pesar de ser una trepadora, su cultivo es sobre todo en maceta dentro de casa porque no tolera el frío.",
    tip: "Puede alcanzar una altura máxima de 20 metros si dispone de un soporte por el que trepar. Sus hojas, con zonas en color crema o tonos amarillos, rompen la monotonía del verde uniforme. Agradece zonas luminosas, pero también puede crecer en semisombra.",
  },
  {
    username: "Juli77",
    name: "PLANTA DE JADE",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/25/planta-de-jade_486a2ddd_800x800.jpg",
    description:
      "La planta de Jade (Crassula ovalata) es una de las suculentas más populares. Es muy longeva y de crecimiento lento, por lo que con los cuidados adecuados puede acompañarte media vida. ",
    tip: "Necesita luz abundante, llegando a tolerar el sol directo, siempre que no sea verano o las temperaturas sean muy elevadas. En invierno y otoño produce pequeñas flores en racimos compuestas por cinco pétalos blancos. El riego debe ser moderado y en invierno bastante espaciado. ",
  },
  {
    username: "Enzito10",
    name: "ORQUÍDEA",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/25/orquidea_f4b9004f_800x800.jpg",
    description:
      "La mala fama de planta delicada la precede, aunque existen variedades, como la Phalaenopsis, que son más fáciles de cuidar. Durante la floración, la orquídea (Orchidaceae) es una planta de gran belleza por sus flores de muchos colores e incluso algunas moteadas.",
    tip: "Una vez ha terminado la floración es muy importante podarla para favorecer una nueva floración. Además, convendrá abonarla a menudo mientras esté echando flores. Agradece una temperatura constante entre los 15 y los 30 grados y luz, pero sin que le dé el sol directo. Para regarla, sumérgela en agua, para que se empapen sus raíces. Pero ojo, porque un exceso de agua podría matarla, tras el riego drénala bien.",
  },
  {
    username:"Nico64",
    name: "MARGARITA",
    imageUrl: "https://www.elmueble.com/medio/2019/03/26/margarita_92002de3_800x800.jpg",
    description: "De margaritas (Bellis perennis) hay más de 140 especies repartidas por todo el mundo. Aunque sus flores pueden presentarse en diferentes colores, la más común es de floración blanca con el botón amarillo. Es una planta que crecerá sin grandes problemas, por lo que es ideal para los primerizos.",
    tip: "Agradece un terreno pobre, mucho sol y agua calcárea. El riego debe ser constante, pero sin excesos, de hecho deberás dejar que la tierra se seque entre riego y riego.",
  },
  {
    username:"Maiten23",
    name: "LAVANDA",
    imageUrl: "https://www.elmueble.com/medio/2019/03/25/lavanda_1cccb9c5_800x800.jpg",
    description: "La lavanda (Lavandula) es una planta aromática de bellas flores malvas que se caracteriza por sus propiedades calmantes, hasta el punto que es una planta que ayuda a conciliar el sueño. Su inconfundible aroma, además, ahuyenta mosquitos y polillas, siendo habitual usar los racimos de sus flores malvas en los armarios.",
    tip: "Es una planta que agradece estar en el exterior, porque necesita sol directo para su buen crecimiento.  ",
  },
  {
    username:"Delfi11",
    name: "KALANCHOE CALANDIVA",
    imageUrl: "https://www.elmueble.com/medio/2019/05/28/kalanchoe-calandiva-abundante-y-compacta-floracion_2b697609_1024x768.jpg",
    description: "Lo que más llama la atención de la Kalanchoe calandiva y la diferencia del resto de variedades son sus flores, dispuestas en ramilletes dobles de diferentes colores. Como planta crasa que es, sus hojas son gruesas, carnosas y de un verde brillante.",
    tip: "Precisa pocos cuidados, empezando por el riego, que debe ser ocasional y solo cuando la tierra esté seca, porque es muy sensible al exceso de agua. Agradece una zona iluminada y un ambiente seco.",
  }
  ,  {
    username:"",
    name: "",
    imageUrl: "",
    description: "",
    tip: "",
  },
  {
    username:"",
    name: "",
    imageUrl: "",
    description: "",
    tip: "",
  },
  {
    username:"",
    name: "",
    imageUrl: "",
    description: "",
    tip: "",
  },
  {
    username:"",
    name: "",
    imageUrl: "",
    description: "",
    tip: "",
  },  {
    username:"",
    name: "",
    imageUrl: "",
    description: "",
    tip: "",
  }
];

const News = () => {
  return (
    <div className="plant-container">
      {plantPost.map((person, index) => {
        return (
          <PlantCard
            key={index}
            username={person.username}
            name={person.name}
            imageUrl={person.imageUrl}
            description={person.description}
            tip={person.tip}
          />
        );
      })}
    </div>
  );
};

export default News;
