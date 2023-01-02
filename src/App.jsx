/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dimensions from './styles/dimensions'
import { Circle, Square, Triangle } from './components/organisms'

function App({ fontSize = dimensions.xxxl }) {
  const [triangleSize, setTriangleSize] = useState(50)
  const [triangleColor, setTriangleColor] = useState('#0070E6')
  const [circleColor, setCircleColor] = useState('#E67000')
  const [circleSize, setCircleSize] = useState(30)
  const [squareColor, setSquareColor] = useState('#E60000')
  const [squareSize, setSquareSize] = useState(40)

  useEffect(() => {
    if (triangleColor === squareColor && squareColor === circleColor) {
      alert('Totes les figures geomètriques tenen el mateix color')
    }
  }, [triangleColor, squareColor, circleColor])

  useEffect(() => {
    if (triangleSize === squareSize && squareSize === circleSize) {
      alert('Totes les figures geomètriques tenen el mateix tamany')
    }
  }, [triangleSize, squareSize, circleSize])

  useEffect(() => {
    if( (triangleSize <= 0 || circleSize <= 0 || squareSize <= 0) ) {
      alert('No es pot crear una figura geomètrica de tamany 0 o més petit !!!')
      setTriangleSize(10)
      setCircleSize(15)
      setSquareSize(20)
    }
  },[triangleSize, circleSize, squareSize])

  return (
    <div className="App">
      <h1 style={{ marginLeft: '1vw', fontSize }}>
        Tarea useState y useEffect: 
      </h1>
      <Triangle
        triangleSize={triangleSize}
        triangleColor={triangleColor}
        setTriangleColor={setTriangleColor}
        setTriangleSize={setTriangleSize}
      />
      <Circle
        circleColor={circleColor}
        circleSize={circleSize}
        setCircleColor={setCircleColor}
        setCircleSize={setCircleSize}
      />
      <Square
        squareColor={squareColor}
        squareSize={squareSize}
        setSquareColor={setSquareColor}
        setSquareSize={setSquareSize}
      />
    </div>
  )
}

export default App

App.propTypes = {
  fontSize: PropTypes.string,
}
