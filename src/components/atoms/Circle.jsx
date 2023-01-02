import React from 'react'
import PropTypes from 'prop-types'

export default function CircleSvg({ circleColor, circleSize }) {
  return (
    <svg
      style={{
        margin: '2vw',
        padding: '2vw'
      }}
    >
      {/* LI DONEM ELS VALORS CX I CY PER FER QUE LES MIDES ARRANQUIN DESDE EL CENTRE DEL CERCLE */}
      <circle
        cx={50}
        cy={50}
        r={circleSize}
        fill={circleColor}
      />
    </svg>
  )
}

CircleSvg.propTypes = {
  circleColor: PropTypes.string,
  circleSize: PropTypes.number,
}