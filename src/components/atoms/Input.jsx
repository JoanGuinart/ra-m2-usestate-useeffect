import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../../styles/dimensions'

/* CREEM EL INPUT I PASSEM ELS PROPS COM PER EXEMPLE VALUE, PER DESPRES FER QUE EL INPUT MOSTRI EL VALOR ACTUALITZAT */

export default function InputNumber({
  inputWidth = dimensions.xxxxl,
  marginbottom = dimensions.xs,
  onChange,
  type,
  id,
  value
}) {
  return (
    <input
      value={value}
      style={{ width: inputWidth, marginBottom: marginbottom }}
      type={type}
      id={id}
      name={id}
      onChange={onChange}
    />
  )
}

InputNumber.propTypes = {
  inputWidth: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  marginbottom: PropTypes.string
}
