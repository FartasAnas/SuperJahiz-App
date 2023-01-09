import React from 'react'
import './DashboardNav.css'
import logo from './../../assets/images/logo/testLogo2.png'
import DashboardNavSection from '../DashboardNavSection/DashboardNavSection'
function DashboardNav(props) {
  return (
    <div className='DashboardNav'>
        <div className='DashboardNav-top'>
            <img src={logo} alt="" />
            <span style={{color : `${props?.contrastColor}`, backgroundColor : `${props?.accentColor}`}}>ADMIN</span>
        </div>
        <div className="DashboardNav-Menu">
            <DashboardNavSection title="Overview">
                <div class="DashboardNavSection-page">Statistics</div>
            </DashboardNavSection>
            <DashboardNavSection title="Products">
                <div class="DashboardNavSection-page">Product List</div>
                <div class="DashboardNavSection-page">Add Products</div>
                <div class="DashboardNavSection-page">Warehouse</div>
            </DashboardNavSection>
            <DashboardNavSection title="Store">
                <div class="DashboardNavSection-page">Status</div>
                <div class="DashboardNavSection-page">Configuration</div>
            </DashboardNavSection>
        </div>
        
    </div>
  )
}

export default DashboardNav