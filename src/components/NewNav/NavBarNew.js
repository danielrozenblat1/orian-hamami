import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from '../../images/אוריאן חממי לוגו.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    let lastScrollY = window.scrollY;
    let ticking = false;

    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClick = () => {
    const phoneNumber = "+972502575574";
    // Set the message content
    const message ="היי אוריאן ,אני רוצה לשמוע ממך עוד על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = ['תוצאות', 'המלצות', 'שאלות נפוצות','תהליך העבודה איתי', ];

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      {isMenuOpen && windowWidth <= 850 && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              to={item} 
              smooth={true} 
              offset={-100}
              duration={700} 
              onClick={closeMenu} >
              {item}
            </ScrollLink>
          ))}
            <div classsName={styles.center}><img className={styles.image} src={logo} alt="אוריאן חממי לוגו"/></div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              offset={-100}
              to={item} 
              smooth={true} 
              duration={500}
            >
              {item}
            </ScrollLink>
          ))}
        
        </div>
      )}
         
       {window.innerWidth>1050  &&<div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>}
      
      <div className={styles.socialIcons}>
      <a href="https://www.instagram.com/orian_hamami_beauty/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleClick} ><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;