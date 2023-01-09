import React from 'react'
import './SectionTitle.css'


function SectionTitle(props) {
  return (
    <div className='SectionTitle'>{props.text}<span className='SectionTitle-right'>{props.children}</span></div>
  )
}

export default SectionTitle