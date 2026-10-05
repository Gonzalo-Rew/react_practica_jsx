import { Component } from "react";

class DibujosComplejosArrayMetodo extends Component {

    dibujarNumero = () => {
        let lista = [];
        for (let i = 0; i < 10; i++) {
            lista.push(<li key={i}> {parseInt(Math.random() * 120)}</li>);
        }
        return lista;
    }

  render() {


    
    return (
      <div>
        <h1>Dibujos Complejos Array</h1>
        <ul>
          {this.dibujarNumero()}
        </ul>
      </div>
    );
  }
}

export default DibujosComplejosArrayMetodo;
