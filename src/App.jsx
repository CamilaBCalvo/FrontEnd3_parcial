import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Card from "./components/Card";

function App() {
  const [libro, setLibro] = useState({});
  const guardarLibro = (
    libroNombre,
    libroAutor,
    libroHojas,
    libroEditorial
  ) => {
    setLibro({ libroNombre, libroAutor, libroHojas, libroEditorial });
  };
  return (
    <>
      <div>
        <h1>📚 Club de Lectura 📚</h1>
        <h2>
          Ingrese los datos de un libro para el Club de Lectura del mes 🤓
        </h2>
        <p>
          Se sorteará el libro que se leerá el mes entrante durante esta semana.
        </p>
        <p> ¡No te pierdas la oportunidad de participar!</p>
      </div>
      <Formulario guardarLibro={guardarLibro} />

      {/* QUIERO ACLARAR EN ESTE PUNTO QUE NO LOGRABA HACER QUE NO ME APAREZCA LA CARD FIJA 
      QUE SOLO SE VEA CUANDO LOS DATOS ESTABAN OK, PERO POR CONSOLA YO VEÍA QUE SE GUARDABAN.
      GOOGLEANDO ENCONTRÉ ESTA OPCION DE OBJECT.KEYS EN STACKOVERFLOW Y ME SONABA DE VER ALGO ASI EN LA MATERIA DE BACKEND
      (BUSQUÉ: CÓMO COMPROBAR UN OBEJTO VACÍO JS), 
      NO SE SI ESTARÁ BIEN, PERO CORRIÓ, ASIQUE ESPERO QUE SI :) */}

      {Object.keys(libro).length === 0 ? undefined : (
        <Card
          libro={libro.libroNombre}
          autor={libro.libroAutor}
          hojas={libro.libroHojas}
          editorial={libro.libroEditorial}
        />
      )}
      <p></p>
    </>
  );
}

export default App;
