import React from 'react';
import './Navbar.css';
import NavbarButton from '../NavbarButton/NavbarButton';

const Navbar = props => {
   return (
      <>
         <header className="navbar">
            <nav className="navbar__navigation">
               <div>
                  <NavbarButton click={props.sidebarClickHandler}/>
               </div>
               <div className="navbar__logo">
                  <a href="/">Brand Logo</a>
               </div>
               <div className="spacer" />
               <div className="navbar__navigation--container">
                  <ul className="navbar__navigation--list">
                     <li className="navbar__navigation--items">
                        <a className="navbar__navigation--link" href="/">Home</a>
                     </li>
                     <li className="navbar__navigation--items">
                        <a className="navbar__navigation--link" href="/">About</a>
                     </li>
                     <li className="navbar__navigation--items">
                        <a className="navbar__navigation--link" href="/">Skills</a>
                        </li>
                     <li className="navbar__navigation--items">
                        <a className="navbar__navigation--link" href="/">Portfolio</a>
                        </li>
                     <li className="navbar__navigation--items">
                        <a className="navbar__navigation--link" href="/">Contact</a>
                        </li>
                  </ul>
               </div>
            </nav>
         </header>
      </>
   );
};

export default Navbar;
