import { NavLink } from "react-router-dom";
import logo_blue from "../assets/icons/logo_blue.svg";
import arrow_down from "../assets/icons/arrow_down.svg";
import DropDown from "./DropDown";

import { useState } from "react";

const NavBar = () => {


const [dropdown, setDropdown] = useState(false);

const toggleDropdown = () => {
    setDropdown(!dropdown);
}

const closeDropdown = () => {
  setDropdown(false);
};


  return (

<>

<nav className="max-container fixed z-50 w-full" data-aos="fade-in" data-aos-duration="700">

  <div className=" mt-0 padding w-full nav-gradient" >

    <div className="flex flex-row gap-10 justify-between">
    
      <div className="items-center">
        <a href="/">
        <img
          src={logo_blue}
          width={170}
          height={50}      
          alt ="logo-white"
          />
      </a>
      </div>
      
      <div className="flex flex-row gap-10 text-white items-center">
        <NavLink  to='/' 

          className="hover:border-b-2 border-white transition-all 
          duration-100 ease-in nav-link"

       onClick={closeDropdown}

        >
        <p className="nav-link-text">Home</p>
        </NavLink>

        
        <NavLink onClick={toggleDropdown}><p className="flex flex-row gap-1">About us <span><img src={arrow_down}/>
        </span></p>
        </NavLink>

            <NavLink to='/services-page'
            className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in nav-link"
              onClick={closeDropdown}
            ><p className="nav-link-text">Services</p></NavLink>

            <NavLink to='/sustainability-page'
              className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in nav-link"
              onClick={closeDropdown}
            ><p className="nav-link-text">Sustainability</p></NavLink>

            <NavLink to='/careers'
            className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in nav-link"
            onClick={closeDropdown}
            ><p className="nav-link-text">Career</p></NavLink>

            <NavLink to='/contact-us'
            className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in nav-link"
            onClick={closeDropdown}
            ><p className="nav-link-text">Contact Us</p></NavLink>

            <NavLink to='/reports'
            className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in nav-link"
            onClick={closeDropdown}
            ><p className="nav-link-text">Reports</p></NavLink>
      </div>
    </div>
  </div>
  {dropdown && <DropDown/>}
  </nav>
    
  </>
  )
}

export default NavBar