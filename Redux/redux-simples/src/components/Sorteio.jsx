import React from "react";
import { connect } from 'react-redux'

import Card from "./Card";

function Sorteio(props) {
  const {min, max} =props
  console.log(props.min)
  console.log(props.max)
  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{Math.floor(Math.random()*(max-min))+min}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProp(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProp)(Sorteio);