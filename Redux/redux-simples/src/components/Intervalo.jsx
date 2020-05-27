import "./Intervalo.css";
import React from "react";
import {connect} from 'react-redux'

import Card from "./Card";
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'


function Intervalo (props) {  
  const {min, max} =props
  
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={min} 
          onChange={e => props.alterarMinimo(+e.target.value)}/>
            
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} 
          onChange={e => props.alterarMaximo(+e.target.value)}/>
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
function mapDispatchToProp(dispacth) {
  return {
   alterarMinimo(novoNumero){
     //actionCreator -> action
      const action = alterarNumeroMinimo(novoNumero)
      dispacth(action)
   },
   alterarMaximo(novoNumero){
     //actionCreator -> action
      const action = alterarNumeroMaximo(novoNumero)
      dispacth(action)
   }
  }
}


export default connect(
  mapStateToProp,
  mapDispatchToProp)
  (Intervalo);