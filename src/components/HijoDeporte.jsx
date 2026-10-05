import { Component } from "react";

export default class HijoDeporte extends Component {
  // Función que llama a la función del padra actualizando el estado del deporte favorito
  mandarFavorito = () => {
    this.props.mostrarFavorito(this.props.nombre);
  };

  render() {
    return (
      <div>
        <h1>HijoDeporte</h1>
        <p style={{ color: "blue" }}>Mi deporte es: {this.props.nombre}</p>
        <button onClick={this.mandarFavorito}>Seleccionar Favorito</button>
      </div>
    );
  }
}
