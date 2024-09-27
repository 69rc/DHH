import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { Button } from 'reactstrap';
import { AiOutlineMenu,  AiOutlineClose} from "react-icons/ai"
import Logo from '../../assets/logo2.png'




export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={` ${isSticky ? 'isSticky' : ''}`} >
      <div className="header">
      <div className="logo-container -3">
      <div className="logo-">
      <div className='m-2 d-flex align-items-center justify-content-center'>
  {/* <CiDeliveryTruck style={{ fontSize: '50px', color: '#000' }} /> */}
  <img src={Logo} alt="" />
</div>
        </div>
        </div>
      <div className={`head-main ${isMenuOpen ? 'open' : ''}`}>
      <div className="inner">
       <ul className={`navlist`} onClick={handleLinkClick}>
          <li>
            <NavLink to="/Home" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" >
              Services
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Track Shipment" >
            Track Shipment
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/FAQ" >
            FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" >
            Blog/News
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" >
              contact
            </NavLink>
          </li>
        </ul>
       </div>
       <div className="last" onClick={handleMenuClick}>
         <ul className='m-3'>
          <li className='btn'>
          <NavLink to="/login" className="login-link">
            <Button className='btns' color='dark'>
              login
            </Button>
            </NavLink>

          </li>
        
        </ul>
       </div>
      </div>
  
        <div className="header-icons">
          <button id="menu-icon" onClick={handleMenuClick}>
           {isMenuOpen ? <AiOutlineClose/> : < AiOutlineMenu/>}
          </button>
        </div>
      </div>
      </header>
    </>
  );
}
