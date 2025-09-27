import React, {useState} from "react";

//parametros de campos tipicos del detalle de una carta
const DetalleCarta = () =>{
    const[condicion, setCondicion] = usetState("Near Mint")
    const[rareza, setRareza] = useState("rara");
    const[extras, setExtras] = useState([]);

    const handleExtrasChange = (change) =>{
        const options = Array.from(change.target.selectedOptions, (opt) => 
        opt.value); //utilizo opt como abreviacion de option 
        setExtras(options);
    };

    //Manejar envio
    const handleSubmit = (event) =>{
        event.preventDefault();
        //Aca podemos conectar la logica del carrito

        alert(`Agregado al carrito\n: ${condicion}, \nRareza: ${rareza}, 
            \nExtras: ${extras.join(", ")}`);
    };

    //Una vez realizado todas las funciones del componentes ahora retornamos

    return(
        <section id="detalle-carta" className="screen" aria-labelledby="detalle-title">
      <h2 id="detalle-title">Detalle de la Carta</h2>
      <article data-id="CQ101">
        <header>
          <h3>MTG: Time Walk</h3>
          <p className="meta">Rareza: Rara • Condición: Near Mint</p>
        </header>
        <form aria-label="Personalización de la compra" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personaliza tu compra</legend>
            <label htmlFor="condicion-detalle">Condición</label>
            <input
              type="text"
              id="condicion-detalle"
              value={condicion}
              onChange={(e) => setCondicion(e.target.value)}
              placeholder="Near Mint"
            />

            <label htmlFor="rareza-detalle">Rareza</label>
            <select
              id="rareza-detalle"
              value={rareza}
              onChange={(e) => setRareza(e.target.value)}
            >
              <option value="comun">Común</option>
              <option value="infrecuente">Infrecuente</option>
              <option value="rara">Rara</option>
            </select>

            <label htmlFor="extras">Extras</label>
            <select
              id="extras"
              multiple
              value={extras}
              onChange={handleExtrasChange}
              aria-describedby="extra-help"
            >
              <option value="foil">Foil</option>
              <option value="firmada">Firmada</option>
              <option value="primera-edicion">Primera Edición</option>
            </select>
            <small id="extra-help">Mantén presionado Ctrl para seleccionar varios.</small>
          </fieldset>
          <button type="submit">Agregar al carrito</button>
        </form>
        <section aria-labelledby="resenas-title">
          <h4 id="resenas-title">Reseñas</h4>
          <ul>
            <li>
              <strong>Carlos</strong> ★★★★★ - "Naizu".
            </li>
            <li>
              <strong>Lucía</strong> ★★★★☆ - "Carozzi"
            </li>
          </ul>
        </section>
      </article>
    </section>

    );
};

export default DetalleCarta;