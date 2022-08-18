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
      "https://plantasyjardin.com/wp-content/uploads/2014/07/Saintpaulia-la-Violeta-africana-en-flor-de-color-violeta-copia-2.jpg",
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
      "https://www.elmueble.com/medio/2021/12/20/potus-planta-interior-ventana_92928cba_674x674.jpg",
    description:
      "Si eres de los que tienes un conocimiento bajo tirando a nulo de plantas, esta seguro que la conoces. Y es que el poto (Pothus) es una clásico entre las plantas de interior. A pesar de ser una trepadora, su cultivo es sobre todo en maceta dentro de casa porque no tolera el frío.",
    tip: "Puede alcanzar una altura máxima de 20 metros si dispone de un soporte por el que trepar. Sus hojas, con zonas en color crema o tonos amarillos, rompen la monotonía del verde uniforme. Agradece zonas luminosas, pero también puede crecer en semisombra.",
  },
  {
    username: "Juli77",
    name: "PLANTA DE JADE",
    imageUrl:
      "https://planoinformativo.com/stock12/image/HOGAR/Plantadejade1.png",
    description:
      "La planta de Jade (Crassula ovalata) es una de las suculentas más populares. Es muy longeva y de crecimiento lento, por lo que con los cuidados adecuados puede acompañarte media vida. ",
    tip: "Necesita luz abundante, llegando a tolerar el sol directo, siempre que no sea verano o las temperaturas sean muy elevadas. En invierno y otoño produce pequeñas flores en racimos compuestas por cinco pétalos blancos. El riego debe ser moderado y en invierno bastante espaciado. ",
  },
  {
    username: "Enzito10",
    name: "ORQUÍDEA",
    imageUrl:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/orquidea-phalaenopsis-41-b81cd6d3703d2c1da216409664851964-1024-1024.jpg",
    description:
      "La mala fama de planta delicada la precede, aunque existen variedades, como la Phalaenopsis, que son más fáciles de cuidar. Durante la floración, la orquídea (Orchidaceae) es una planta de gran belleza por sus flores de muchos colores e incluso algunas moteadas.",
    tip: "Una vez ha terminado la floración es muy importante podarla para favorecer una nueva floración. Además, convendrá abonarla a menudo mientras esté echando flores. Agradece una temperatura constante entre los 15 y los 30 grados y luz, pero sin que le dé el sol directo. Para regarla, sumérgela en agua, para que se empapen sus raíces. Pero ojo, porque un exceso de agua podría matarla, tras el riego drénala bien.",
  },
  {
    username:"Nico64",
    name: "MARGARITA",
    imageUrl: "https://media.floresfrescasonline.com/product/margaritas-800x800.jpeg",
    description: "De margaritas (Bellis perennis) hay más de 140 especies repartidas por todo el mundo. Aunque sus flores pueden presentarse en diferentes colores, la más común es de floración blanca con el botón amarillo. Es una planta que crecerá sin grandes problemas, por lo que es ideal para los primerizos.",
    tip: "Agradece un terreno pobre, mucho sol y agua calcárea. El riego debe ser constante, pero sin excesos, de hecho deberás dejar que la tierra se seque entre riego y riego.",
  },
  {
    username:"Byalfoster",
    name: "HORTENSIA",
    imageUrl: "https://mundoclubhouse.com/wp-content/uploads/2019/04/hortencia.jpg",
    description: "Las flores de las hortensias (Hydrangea) se presentan en macizos redondeados que pueden adquirir mucho volumen y ser de infinidad de colores. Se trata de un arbusto, por lo que al plantarla es importante dejarle suficiente espacio alrededor para poder crecer y desarrollarse.",
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
    username:"nathy_213",
    name: "ALOE VERA",
    imageUrl: "https://www.tramil.net/sites/default/files/styles/wide/public/aloe_verarg.jpg?itok=hdMgNn4Z",
    description: "Es una de las plantas más fáciles de encontrar en las casas, porque es muy resistente, aunque no tolera un exceso de sol en verano o temperaturas por debajo de los -10 ºC.",
    tip: "Es de fácil mantenimiento, basta con regalarla de manera constante, pero sin encharcarla. Aunque la cualidad por la que más destaca la Aloe Vera son sus propiedades curativas.",
  },
  {
    username:"Susane_243",
    name: "BOCA DE DRAGÓN",
    imageUrl: "https://www.aromatikflor.com/wp-content/uploads/2020/12/Boca-de-dragon-4.jpg",
    description: "El Antirrhinum majus, conocido como boca de dragón, dragonaria, antirrino o boca de león, es una planta mediterránea que destaca por sus peculiares flores con forma de hocico que, precisamente, dan múltiples sobrenombres.",
    tip: "Agradece el sol directo para crecer, una temperatura templada y un riego regular, pero nunca abundante.",
  },
  {
    username:"Arturo_blank",
    name: "ANTURIO",
    imageUrl: "https://www.hola.com/imagenes/decoracion/20210326186727/cultivar-anturio-plantas-interior-mc/0-935-193/anturio1-m.jpg",
    description: "Su característica y rica floración, con un espádice tipo espiga rodeado de una hoja o espata de color rojo en forma de corazón, convierten al Anturio (Anthurium) en una buena opción para decorar cualquier rincón de casa... siempre y cuando disfrute de claridad pero sin recibir luz directa, ya que podría dañarla",
    tip: "Es una planta tropical, por lo que necesita ambientes húmedos. En este sentido, es mejor pulverizar agua a menudo en vez de regarla de manera tradicional. ",
  },
  {
    username:"lao",
    name: "ROSA DE ALABASTRO",
    imageUrl: "https://www.jardineriaon.com/wp-content/uploads/2019/05/echeveria-elegans.jpg",
    description: "La rosa de alabastro, cuyo nombre científico es Echeveria Elegans, es una de las crasas más populares por su gran belleza. Esto se debe a su flor en forma de estrella. Puede cultivarse tanto en interior como en exterior, aunque protegida de las heladas y los fríos intensos",
    tip: "Es una planta muy sensible al riego, por lo que es mejor ser moderados y esperar a que el sustrato se seque entre riegos. Colócala en una ubicación soleada donde reciba, al menos, cuatro horas de sol directo al día.",
  },
  {
    username:"doja_cat",
    name: "PLANTA CHINA DEL DINERO",
    imageUrl: "https://img.bylauragarcia.com/contenedorblog/d52dd932-31d9-4e1e-9e1f-1b4b9842d54f_pilea1.jpg",
    description: "La Pilea peperomioides se ha convertido en toda una estrella de las redes sociales. También se la conoce con el nombre de 'planta del misionero' o 'hiedra sueca'.",
    tip: "Es una planta amante de los ambientes sombríos, frescos y húmedos. Además es muy resistente y sus cuidados son muy sencillos. En cuanto a los riegos, lo ideal es esperar a que se seque el sustrato entre riegos.  ",
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
