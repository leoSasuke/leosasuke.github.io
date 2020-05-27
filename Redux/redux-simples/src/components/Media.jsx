import React from "react";
import { connect } from "react-redux";//conect o estado com as propriedades

import Card from "./Card";

function Media(props) {
  const {min, max} =props
  //console.log(props.min)
  //console.log(props.max)
  return(
    <Card title='Média dos Numeros' green>
      <div>
        <span>
          <span>Resultado: </span>
          <span>{(max+min)/2}</span>
        </span>
      </div>
    </Card>
  )
}
function mapStateToProps(state){//faz a conecção do estado com props
  return {
    min:state.numeros.min,
    max:state.numeros.max,
  }
}
export default connect(mapStateToProps)(Media)