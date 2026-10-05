import { Component } from "react";

export default class Comic extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>{this.props.comicData.titulo}</h1>
        <p>{this.props.comicData.descripcion}</p>
        <img
          src={this.props.comicData.imagen}
          style={{ width: "250px", height: "300px" }}
        />
        <button
          onClick={() => {
            this.props.seleccionarComic(this.props.comicData);
          }}
        >
          Seleccinar como Favorito
        </button>
        <button
          onClick={() => {
            this.props.eliminarComic(this.props.id);
            }}
        >
          Eliminar Comic
        </button>

      </div>
    );
  }
}
