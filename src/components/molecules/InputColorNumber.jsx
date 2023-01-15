import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Label } from '../atoms'

/* AQUI IMPORTEM COMPONENT LABEL I EL INPUT, PER CREAR EL COMPONENT CONJUNT DE TRIANGLE COLOR + INPUT */

// Lo llamaria inputColorNumber
export default function InputColorNumber({ value, text, onChangeColor, id }) {
  return (
    <div>
      {/* No es necesario que InputNumber este dentro de label */}
      <Label htmlFor={id}>
        {`${text}color `}
        <InputNumber
          value={value}
          type="color"
          onChange={onChangeColor}
          id={id}
        />
      </Label>
    </div>
  )
}

InputColorNumber.propTypes = {
  text: PropTypes.string,
  onChangeColor: PropTypes.func,
  id: PropTypes.string, // Algunas props deberían ser requeridas
  value: PropTypes.string,
}
