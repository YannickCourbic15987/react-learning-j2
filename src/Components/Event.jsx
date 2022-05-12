//partie logique 
//je vais créer des button à la chaine 

import { useEffect, useState } from "react"
import "../Event.css"

const tabTodo = ["terminer", "supprimer", "modifier"]
//pour l'utilisation de setintervalle()
//! let n = 0 
//! const element = document.getElementById("demo");
//! setInterval(function() {element.innerHTML = n++}, 1000);

function Event() {
    //partie rendu ,n'accepte que la logique en 1 seule ligne 
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <>


            <h1> cours sur les events </h1>
            {tabTodo.map((element, i) => <button key={i} className="btn">{element}</button>)}
            <h1> Chrono : {timer} nimpô secret tech element == element + {timer}</h1>


        </>
    )
}

export default Event