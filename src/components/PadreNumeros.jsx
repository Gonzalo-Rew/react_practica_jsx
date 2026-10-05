import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

export default class PadreNumeros extends Component {
  state = {
    numeros: [],
    suma: 0,
  };

  sumarNumeros = (sumando) => {
    this.setState({ suma: this.state.suma + sumando });
  };

  generarNumeros = () => {
    this.state.numeros.push(Math.floor((Math.random() * 10) + 1));
    this.setState({ numeros: this.state.numeros });
  };

  generarPrimerosNumeros = () => {
    for (let i = 0; i < 5; i++) {
      this.state.numeros.push(Math.floor((Math.random() * 10) + 1));
    }
    this.setState({ numeros: this.state.numeros });
  };

  render() {
    return (
      <div>
        {this.state.numeros.length === 0 && (
          <button onClick={this.generarPrimerosNumeros}>Generar primeros números</button>
        )}
        <h2>Padre de Números</h2>
        <p>La suma es {this.state.suma}</p>
        <button onClick={this.generarNumeros}>Generar número</button>

        {this.state.numeros.map((numero, index) => (
          <HijoNumeros key={index} numero={numero} sumar={this.sumarNumeros} />
        ))}
      </div>
    );
  }
}
