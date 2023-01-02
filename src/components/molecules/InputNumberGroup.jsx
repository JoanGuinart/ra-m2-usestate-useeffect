import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Label } from '../atoms'

/* AQUÍ TORNEM A IMPORTAR EL COMPONENT INPUT I LA ETIQUETA DE ATOMS PER CREAR EL CONJUNT DE TRIANGLE SIZE + INPUT TYPE NUMBER */

export default function InputNumberGroup({ value ,text, onChangeSize, id }) {
  return (

    /* TORNEM A PASAR ELS PROPS, ALGUNS JA ESTAN ACTUALITZATS COM EL INPUT-WIDTH I ALTRES COM EL VALUE NO ESTAN PASSATS ENCARA JA QUE NO TINDRIA SENTIT PASSARHO AQUI PER QUE NECESITEM UN ESPECIFIC PER CADA FIGURA */
    <div>
      <Label htmlFor={id}>
        {`${text}size `}
        <InputNumber 
        type="number"
        value={value}
        inputWidth='10vw'
        onChange={onChangeSize} 
        id={id} />
      </Label>
    </div>
  )
}
InputNumberGroup.propTypes = {
  text: PropTypes.string,
  onChangeSize: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.number
}
