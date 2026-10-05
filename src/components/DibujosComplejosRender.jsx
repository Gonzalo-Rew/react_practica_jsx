import { Component } from "react";

class DibujosComplejosRender extends Component {
  //Lista dinámica de nombres
  state = {
    nombres: [],
  };

  //Metodo para agregar nombre a la lista
  cargarNombre = (nombre) => {
    this.state.nombres.push(nombre);
    this.setState({ nombres: this.state.nombres });
  };

  render() {
    return (
      <div>
        <h1>Array Dinámico Render</h1>
        {/* Formulario para agregar nombre a la lista */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.cargarNombre(e.target.nombre.value);
            e.target.nombre.value = "";
          }}
        >
          <input type="text" name="nombre" />
          <button type="submit">Agregar Nombre</button>
        </form>
        {/* Dibujo dinamico de la lista */}
        <ul>
          {this.state.nombres.map((nombre, index) => {
            return <li key={index}>{nombre}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default DibujosComplejosRender;
