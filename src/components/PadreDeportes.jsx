import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeportes extends Component {
  //Lista estática de deportes
  deportes = ["Fútbol", "Baloncesto", "Tenis"];

  // Estado del deporte favorito
  state = {
    favorito: "",
  };

  // Función que se pasa al hijo para actualizar el estado del padre
  mostrarFavorito = (deporte) => {
    this.setState({
      favorito: deporte,
    });
  };

  render() {
    return (
      <div>
        <h1>Padre de Deportes</h1>
        <p> Mi deporte favorito es: {this.state.favorito}</p>

        {/* Generamos componente HijoDeporte por cada deporte de la lista */}
        {this.deportes.map((deporte, index) => {
          return (
            <HijoDeporte
              key={index}
              nombre={deporte}
              mostrarFavorito={this.mostrarFavorito}
            />
          );
        })}
      </div>
    );
  }
}
