import { Component } from "react";

class Contador extends Component {
  state = {
    valor: parseFloat(this.props.inicio),
  };

  incrementarValor = () => {
    this.setState({ valor: this.state.valor + 1 });
  };

  render() {
    return (
      <div>
        <h1>Contador Valor</h1>
        <h2>{this.state.valor}</h2>
        <button onClick={this.incrementarValor}>Incrementar Valor</button>
      </div>
    );
  }
} 
export default Contador;