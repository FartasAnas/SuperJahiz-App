import React from 'react'
import './ShowAllButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function ShowAllButton(props) {
  return (
    <Link to={props.to}>
      <div className='ShowAllButton' style={{color:`${props.accentColor}`}}>{"View all"} <FontAwesomeIcon icon={faArrowRight} fontSize="0.85em"/></div>
    </Link>
  )
}

export default ShowAllButton