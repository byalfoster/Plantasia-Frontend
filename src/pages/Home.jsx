import React from "react";
import HomePlants from "../components/HomePlants";
import "../styles/PlantHome.css";
import "../styles/homeIllustration.css";


const homePlantCard = [
  {
    name: "RANÚNCULO O FRANCESILLA",
    imageUrl:
      "https://i0.wp.com/cvetnik.me/wp-content/uploads/2017/12/ranunkulyus_aziatskiy_3_29134011.jpg",
    description:
      "son plantas bulbosas de exterior de poca altura cuya floración arranca a finales de invierno y se prolonga hasta el verano, en el caso de haberlos plantado en otoño. Sus flores pueden presentar muchos colores, desde blancas y amarillas hasta naranjas, rosas, rojas o moradas. ",
  },
  {
    name: "ROSAL MINI",
    imageUrl:
      "https://www.elmueble.com/medio/2019/03/25/rosal-mini_251d4074_800x800.jpg",
    description:
      "El rosal mini o rosal de pitiminí te cautivará por sus bellas flores, una versión enana de las rosas clásicas. Es muy sensible a las temperaturas: no tolera ni un exceso de calor ni de frío, por eso se recomienda que pase los inviernos dentro y cuando acabe la floración, llevarla al exterior, o semisombra, hasta el final del otoño, que la vuelves a meter en casa.",
  },
  {
    name: "AGAPANTO",
    imageUrl:
      "https://www.elmueble.com/medio/2021/10/07/00313275_4c8c1173_979x1305.jpg",
    description:
      "también conocido con el nombre de lirio africano, es una planta con flor muy vistosa y resistente. Se cultivan en primavera, de manera que ofrecerán flores durante todo el verano y hasta que comience el otoño.",
  },
  {
    name: "ROSA DE ALABASTRO",
    imageUrl:
      "https://www.elmueble.com/medio/2021/10/07/crasas-en-maceta_00483489_550de896_800x1200.jpg",
    description:
      "La rosa de alabastro, cuyo nombre científico es Echeveria Elegans, es una de las crasas más populares por su gran belleza. Esto se debe a su flor en forma de estrella. Puede cultivarse tanto en interior como en exterior, aunque protegida de las heladas y los fríos intensos",
  },
  {
    name: "BUGANVILLA",
    imageUrl:
      "https://www.elmueble.com/medio/2021/10/07/detalle-de-buganvilla-en-una-maceta-junto-a-la-ventana_4721eb59_979x1280.jpg",
    description:
      "La buganvilla es una planta de exterior con una espectacular floración y que es muy empleada para decorar fachadas y vallas, ya que es trepadora. Florece durante el verano y puede ofrece flores blancas, rosas, violetas, rojas, naranjas o amarillas.",
  },
];

const Home = () => {
  return (
    <>
      <div className="illustration-left">
        <img className= "gardener-one" src={require("../img/gardener1.png")} alt="gardener" />
        <img className= "gardener-four" src={require("../img/gardener4.png")} alt="gardener" />
      </div>
      <div className="plant-home-container">
        {homePlantCard.map((plant, index) => {
          return (
            <HomePlants
              key={index}
              name={plant.name}
              imageUrl={plant.imageUrl}
              description={plant.description}
            />
          );
        })}
      </div>

      <div className="illustration-right">
        <img className= "gardener-two" src={require("../img/gardener2.png")} alt="gardener" />
        <img className= "gardener-three" src={require("../img/gardener3.png")} alt="gardener" />
      </div>
    </>
  );
};

export default Home;
