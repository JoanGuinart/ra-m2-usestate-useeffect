import React from 'react'
import PropTypes from 'prop-types'

export default function TriangleSvg({ triangleSize, triangleColor }) {
  return (
    <svg
      style={{
        margin: '2vw',
        padding: '2vw'
      }}
    >
      {/* Polygon per crar un triangle a base de 3 coordenades punt esquerre, alçada(punt central) y punt dret en aquest ordre, pd: tampoc se com fer que creixi desde el centre */}
      <polygon
        fill={triangleColor}
        points={`0 ${triangleSize},
        ${triangleSize} 0, 
        ${triangleSize * 2} ${triangleSize}`}
      />
    </svg>
  )
}

TriangleSvg.propTypes = {
  triangleColor: PropTypes.string,
  triangleSize: PropTypes.number,
}
