import React from 'react'
import "./styles.css"

export const Input = (props) => {
  return (
      <div className='input-content'>
        <label className='label' htmlFor={props.label}>{props.label}</label>
        <input id={props.label} placeholder={props.placeholder} className='input-form' type={props.type}  style={{width: props.width || "300px"}} onChange={props.onChange} min={0}/>
    </div>
  )
}
