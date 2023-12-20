import React from 'react'

export const Content = (props) => {
  return (
    <div>
        <div  className="content">
            {props.children}
          </div>
    </div>
  )
}
