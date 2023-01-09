import React from 'react'
import './NavBarConnected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function NavBarConnected() {
  return (
    <div className='NavBarConnected'>
        <div className="NavBarConnected-orders">
            Orders
        </div>
        <Link to="/cart">
            <div className="NavBarConnected-cart">
                Cart
                <span className="NavBarConnected-cart-icon">
                    <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
                </span>
             </div>
        </Link>
        
        <div className="NavBarConnected-user">
            Diae Hajib
            <span className="NavBarConnected-user-icon">
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
        </div>
    </div>
  )
}

export default NavBarConnected