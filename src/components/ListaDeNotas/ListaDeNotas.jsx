import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho","Trabalho","Estudos").map((categoria) => {
          return(
            <li className="lista-notas_item">
              <div>{categoria}</div>
              <CardNota />
            </li>
          )

        })}      
      </ul>
    );
  }
}

export default ListaDeNotas;
