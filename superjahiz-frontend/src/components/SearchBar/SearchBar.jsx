import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function SearchBar(props) {
  const [search,setSearch] = useState()

  return (
    <div className='SearchBar'>
        <input type="text" name="search" id="search" placeholder="search for products" className="SearchBar-input" onChange={(e)=> {
          setSearch(e.target.value)
          }}/>
        <Link to={"/products/?search="+search}><button className='SearchBar-button' onClick={()=>props.setUpdated(search)}><FontAwesomeIcon icon={faSearch}/></button></Link>
    </div>
  )
}

export default SearchBar