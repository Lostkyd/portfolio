import React, { useState, useRef } from 'react'
import './Navbar.css' 
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import web_logo from '../../assets/Web_logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }
  return (
    <div className='navbar'>
      <img src={web_logo} alt="" className='logo'/>
      <img src= {menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} onClick={closeMenu} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu}alt="" className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu == "home"}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu == "about" }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setMenu("project")}>Projects</p></AnchorLink>{menu == "project"}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu == "contact"}</li>
        </ul>
    </div>
  )
}

export default Navbar