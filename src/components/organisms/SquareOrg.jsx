import React from 'react'
import PropTypes from 'prop-types'
import { SquareSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

/* AQUI EL QUE FEM ES CREAR EL COMPONENT SENCER: IMPORTEM EL INPUTCOLOR I NUMBER QUE SON EL CONJUNT DE TEXT + INPUT I TAMBÈ IMPORTEM EN AQUEST CAS EL CUADRAT PER CREAR EL CONJUNT  DE 2 INPUTS + EL SQUARE FET AMB SVG */

export default function Square({
  squareColor,
  squareSize,
  setSquareColor,
  setSquareSize,
}) {
  const text = 'Square '
  const idColor = 'InputColorSQ'
  const idNumber = 'InputNumberSQ'
  return (
    <div style={{ padding: '2vw' }}>
      <InputNumberGroup
        text={text}
        value={squareSize}
        onChangeSize={(e) => setSquareSize(Number(e.target.value))}
        id={idNumber}
      />
      <InputColorNumber
        text={text}
        value={squareColor}
        onChangeColor={(e) => setSquareColor(e.target.value)}
        id={idColor}
      />
      <SquareSvg squareColor={squareColor} squareSize={squareSize} />
    </div>
  )
}

Square.propTypes = {
  squareColor: PropTypes.string,
  squareSize: PropTypes.number,
  setSquareColor: PropTypes.func,
  setSquareSize: PropTypes.func,
}