import React from 'react'
import './FlexWrapper.css'
function FlexWrapper(props) {
  return (
    <div className='FlexWrapper' style={{justifyContent:`${props?.justify || "flex-start"}`}}>{props.children}</div>
  )
}

export default FlexWrapper