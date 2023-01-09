import { render } from '@testing-library/react'
import React from 'react'
import './FooterContent.css'
function FooterContent(props) {
  var i = 9999;
    function renderContent(){
        return props?.children.map(child => {
          return <p key={i++} className='FooterContent-content'>{child}</p>})
    }
  return (
    <div className='FooterContent'>
        <p className='FooterContent-title'>{props.title}</p>
        {renderContent()}
    </div>
  )
}

export default FooterContent