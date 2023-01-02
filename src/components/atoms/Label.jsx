import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../../styles/dimensions'

/* CREEM LA ETIQUETA LABEL QUE SERÀ EL TEXT QUE ANIRA DAVANT DE CADA INPUT, EL MODIFICAREM DESPRES JA QUE PORTA EL ATRIBUT CHILDREN, AIXI ES REUTILITZABLE */

export default function Label({
  children,
  fontSize = dimensions.font.base,
  htmlFor,
}) {
  return (
    <label 
    style={{ fontSize }} 
    htmlFor={htmlFor}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  htmlFor: PropTypes.string,
}