import React from 'react'
import './Footer.css'
import logo from './../../assets/images/logo/testLogo2.png'
import FooterContent from '../FooterContent/FooterContent'
function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-copyright">
            <img src={logo} alt="logo" className="Footer-copyrightLogo" /><br/><br/>
            <span className="Footer-copyrightText">Made by HAJIB Diae and FARTAS Anas</span>
        </div>
        <FooterContent title="Popular Categories">
            <span>Glasses</span>
            <span>Electronics</span>
            <span>Shoes</span>
        </FooterContent>
        <FooterContent title="Get To Know Us">
            <span>Abous us</span>
            <span>Contacts</span>
        </FooterContent>
        <FooterContent title="Social Media">
            <span>Facebook</span>
            <span>Youtube</span>
            <span>Instagram</span>
        </FooterContent>
        
    </div>
  )
}

export default Footer