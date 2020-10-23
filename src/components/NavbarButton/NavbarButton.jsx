import React from 'react';
import './NavbarButton.css';

const NavbarButton = props => {
   return (
      <button className="navbar__button">
         <div className="navbar__button--bar"></div>
         <div className="navbar__button--bar"></div>
         <div className="navbar__button--bar"></div>
      </button>
   );
};

export default NavbarButton;
