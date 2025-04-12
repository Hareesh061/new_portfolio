import React, { useState } from 'react'
import './Navbar.css'
import logo_dark from '../../assets/logo.png'
import logo_light from '../../assets/logo.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { FiMenu } from "react-icons/fi";


const Navbar = ({theme,setTheme}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle_menu =()=>{
      setIsOpen(!isOpen);
    };
 
    const toggle_mode =() =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div className='navbar'>

        <img src={theme === 'light' ? logo_light : logo_dark} alt=" " className='logo'/>

        <ul className={isOpen ? 'nav-link active': 'nav-link'}>
            <li><a href='' className='active'>Home</a></li>
            <li><a href='#about' >About</a></li>
            <li><a href='#education' >Education</a></li>
            <li><a href='#Ex' >Experience</a></li>
            <li><a href='#skill' >Skills</a></li>
            <li><a href='#prog' >Projects</a></li>
           
        </ul>
       

      
     <img  onClick={toggle_mode} src={theme == 'light' ? toggle_light : toggle_dark} alt=" " className='toggle-icon'/>
    
    <div className="icon"  onClick={toggle_menu}>
    <FiMenu />
    </div>
      
    </div>
    
  )
}

export default Navbar;
