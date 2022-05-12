import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);
  const $état_initiale = "yannick";
  return (
    <div>
      <p>nombre de click : {count} fois </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click + 1
      </button>
    </div>
  );
}

export default Compteur;
