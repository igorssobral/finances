import React from 'react'
import "./styles.css"

export const Input = (props) => {
  return (
      <div className='input-content'>
        <label className='label' htmlFor={props.label}>{props.label}</label>
        <input id={props.label} className='input-form' type={props.type} />
    </div>
  )
}
