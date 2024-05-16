import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
      <nav className='nav'>
        <ul className='nav_list'>
          <li className='nav_list_item'>
            <NavLink exact="true" to='/Portfolio_Baya' className='nav_link'>
              Accueil
            </NavLink>
          </li>
          <li className='nav_list_item'>
            <NavLink to='/about' className='nav_link'>
              À propos de moi
            </NavLink>
          </li>
          <li className='nav_list_item'>
            <NavLink to='/projets' className='nav_link'>
              Projets
            </NavLink>
          </li>
          <li className='nav_list_item'>
            <NavLink to='/contact' className='nav_link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
