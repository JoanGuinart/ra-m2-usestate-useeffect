import React from 'react'
import PropTypes from 'prop-types'

export default function SquareSvg({ squareColor, squareSize }) {
  return (
    /* m'agradaria fer que el cuadrat creixes desde el centre pero no se com fer-ho ja que puc posicionar les cordenades x i y nomes de la seva cantonada esqurre superior */
    <svg
      style={{
        margin: '2vw',
        padding: '2vw'
      }}
    >
      {/* Etiqueta svg rectangle: RECT */}
      <rect
        x="25"
        y="30"
        width={squareSize}
        height={squareSize}
        fill={squareColor}
      />
    </svg>
  )
}

SquareSvg.propTypes = {
  squareColor: PropTypes.string,
  squareSize: PropTypes.number,
}
