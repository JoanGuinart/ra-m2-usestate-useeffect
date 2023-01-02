import React from 'react'
import PropTypes from 'prop-types'
import { TriangleSvg } from '../atoms'
import { InputColorNumber, InputNumberGroup } from '../molecules'

/* AQUI EL QUE FEM ES CREAR EL COMPONENT SENCER: IMPORTEM EL INPUTCOLOR I NUMBER QUE SON EL CONJUNT DE TEXT + INPUT I TAMBÈ IMPORTEM EN AQUEST CAS EL TRIANGLE PER CREAR EL CONJUNT  DE 2 INPUTS + EL POLYGON FET AMB SVG */

export default function Triangle({
  triangleColor,
  triangleSize,
  setTriangleColor,
  setTriangleSize,
}) {
  const text = 'Triangle '
  const idColor = 'triangleInputColor'
  const idNumber = 'triangleInputNumber'
  return (
    <div style={{ padding: '2vw' }}>
      <InputNumberGroup
        text={text}
        value={triangleSize}
        onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
        id={idNumber}
      />
      <InputColorNumber
        text={text}
        value={triangleColor}
        onChangeColor={(e) => setTriangleColor(e.target.value)}
        id={idColor}
      />

      <TriangleSvg triangleSize={triangleSize} triangleColor={triangleColor} />
    </div>
  )
}

Triangle.propTypes = {
  triangleColor: PropTypes.string,
  triangleSize: PropTypes.number,
  setTriangleColor: PropTypes.func,
  setTriangleSize: PropTypes.func,
}
