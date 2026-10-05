import { Component } from "react";

export default class HijoNumeros extends Component {
  sumarNumero = () => {
    this.props.sumar(this.props.numero);
  };

  render() {
    return (
      <div>
        <h2>Soy el número {this.props.numero}</h2>
        <button onClick={this.sumarNumero}>Sumar número</button>
      </div>
    );
  }
}
