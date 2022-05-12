import "./Bloc2";
import Parent from "./Components/Parent";
import { useState } from "react";
// const $name = <Welcome name="yannick" />;
// function Welcome(props) {
//   return <h1>Bonjour , {props.name}</h1>;
// }

// function WriteNameManga(props) {
//   return <p> le non du manga est : {props.nameManga}</p>;
// }
// function Parent(props){
//     return(

//     )
// }
// rendu de ton objet bloc 2 :
/*{ <Welcome name="hajime" />
<Welcome name="luffy" />
<Welcome name="zorro" />
<WriteNameManga nameManga="One piece" />
<WriteNameManga nameManga="dbz" />
<WriteNameManga nameManga="dbs" /> *}/

{/* c'est la création des composants , et props c'est un paramètre , argument d'une fonction , mais en évoluer  */
//partie logique javascripte
const n = 20;
let functionOrdinal = (n) => {
  for (let i = 0; i < 15; i++) {
    n++;
  }
  return n + " test ";
};
const element = (
  <h2>
    je suis un élèment + {n} + {functionOrdinal(n)}
  </h2>
);

function Write(props) {
  return <p>je suis une props sympa {props.name} </p>;
}
function WaterState(props) {
  return (
    <div>
      <p>changement de la matière : {props.etat}</p>
    </div>
  );
}
function StarsChange(props) {
  return (
    <div>
      <p>changement des étoiles au cours du temps : {props.etoile}</p>
    </div>
  );
}
function Bloc2() {
  const [waterStat] = useState(["liquide", "vapeur", "gazeux", "plasma"]);
  const [index, setIndex] = useState(0);
  function changeWaterStat() {
    if (index >= waterStat.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  const [starsState] = useState([
    "matière interstellaire",
    "protoétoile",
    "étoile",
    "géante rouge",
    "étoile pulsante",
    "naine blanche",
  ]);
  const [i, setI] = useState(0);
  function changeStars() {
    if (i >= starsState.length - 1) {
      setI(0);
    } else {
      setI(i + 1);
    }
  }
  const tab = ["eleve1", "eleve2", "eleve3", "eleve4"]
  //   const tabList = useState(["yannick", "eleve2", "eleve3"]);
  //   function ListEleve() {
  //       const map1 = tabList.map()
  //   }
  const tab2 = []

  for (let i = 0; i < tab.length; i++) {
    tab2.push(<li>boucle</li>)
  }


  return (
    <>
      {tab2}

      {/* {forListEleve()} */}
      <StarsChange etoile={starsState[i]} />
      <WaterState etat={waterStat[index]} />
      <Write name="salut" />
      <Parent name={"luffy"} nameManga={"One piece"} TypeManga={"Shonen"} />
      <Parent name={"Goku"} nameManga={"Dragon Ball"} TypeManga={"Shonen"} />
      {element}
      <h1>bloc n°2 + {n}</h1>
      <button onClick={() => changeWaterStat()}>click</button>
      <button onClick={() => changeStars()}>changement</button>
    </>
  );
}

export default Bloc2;

