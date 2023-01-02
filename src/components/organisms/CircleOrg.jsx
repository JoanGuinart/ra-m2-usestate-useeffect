import React from 'react'
import PropTypes from 'prop-types'
import { CircleSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

/* AQUI EL QUE FEM ES CREAR EL COMPONENT SENCER: IMPORTEM EL INPUTCOLOR I NUMBER QUE SON EL CONJUNT DE TEXT + INPUT I TAMBÈ IMPORTEM EN AQUEST CAS EL CIRCLE PER CREAR EL CONJUNT  DE 2 INPUTS + EL CERCLE FET AMB SVG */

export default function Circle({
  circleColor,
  circleSize,
  setCircleColor,
  setCircleSize,
}) {
  const text = 'Circle '
  const idColor = 'InputColorCl'
  const idNumber = 'InputNumberCL'

  return (
    <div style={{ padding: '2vw' }}>
      <InputNumberGroup
        text={text}
        value={circleSize}
        onChangeSize={e => setCircleSize(Number(e.target.value))}
        id={idNumber}
      />
      <InputColorNumber
        text={text}
        value={circleColor}
        onChangeColor={e => setCircleColor(e.target.value)}
        id={idColor}
      />
      <CircleSvg circleColor={circleColor} circleSize={circleSize} />
    </div>
  )
}

Circle.propTypes = {
  circleColor: PropTypes.string,
  circleSize: PropTypes.number,
  setCircleColor: PropTypes.func,
  setCircleSize: PropTypes.func,
}