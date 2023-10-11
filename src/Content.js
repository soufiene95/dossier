import { useState, useEffect } from "react";

export default function Content() {
  // c'est le state qui permt au composant de se réafficher
  const [monState, setMonState] = useState(1);
  const [monAutreState, setMonAutreState] = useState("hooks");

  //   permet de modifier la valeur
  const changeState = () => {
    setMonState(7);
    // setMonAutreState("je suis nouveau");
  };
  // permet de changer le 2ème state
  const changeAutreState = () => {
    setMonAutreState("je suis nouveau");
  };
  // il est appelé tout de suite après que le composant s'est affiché
  useEffect(() => {
    console.log("le composant a changé");
  }, []);

  return (
    <div>
      <button onClick={changeState}>click Me</button>
      <button onClick={changeAutreState}>click Mon Autre</button>
      <p>{monState}</p>
      <p>{monAutreState}</p>
    </div>
  );
}
