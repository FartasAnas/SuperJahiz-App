import React from 'react'
import { useState } from 'react'
import './DashboardNavSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
function DashboardNavSection(props) {
    const [opened,setOpened] = useState(false)
    function renderContent()
    {
        if(opened)
        {
            return(props.children)
        }
    }
  return (
    <div className='DashboardNavSection'>
        <div className='DashboardNavSection-title' onClick={() => {opened ? setOpened(false) : setOpened(true)}}><span>{props?.title}</span><FontAwesomeIcon fontSize={"0.8em"} icon={opened ? faChevronDown : faChevronUp}/></div>
        
            {renderContent()}
        
        
    </div>
  )
}

export default DashboardNavSection