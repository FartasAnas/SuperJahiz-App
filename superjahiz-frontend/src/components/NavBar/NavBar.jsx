import React from 'react'
import './NavBar.css'
import logo from './../../assets/images/logo/testLogo2.png'
import SearchBar from '../SearchBar/SearchBar'
import NavBarConnected from '../NavBarConnected/NavBarConnected'
import { Link } from 'react-router-dom'
function NavBar(props) {
  return (
    <div className='NavBar'>
        <Link to="/home"><img src={logo} alt="logo" className="NavBar-logo" /></Link>
        <SearchBar setUpdated={props.setUpdated}/>
        <NavBarConnected/>
    </div>
  )
}

export default NavBar