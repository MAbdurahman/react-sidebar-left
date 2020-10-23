import React from 'react';
import './Navbar.css';

const Navbar = props => {
   return (
      <>
         <header className="navbar">
            <nav className="navbar__navigation">
               <div />
               <div className="navbar__logo">
                  <a href="/">Brand Logo</a>
               </div>
               <div className="spacer" />
               <div className="navbar__navigation--container">
                  <ul className="navbar__navigation--list">
                     <li className="navbar__navigation--items">
                        <a href="/">Home</a>
                     </li>
                     <li className="navbar__navigation--items">
                        <a href="/">About</a>
                     </li>
                     <li className="navbar__navigation--items"><a href="/">Skills</a></li>
                     <li className="navbar__navigation--items"><a href="/">Portfolio</a></li>
                     <li className="navbar__navigation--items"><a href="/">Contact</a></li>
                  </ul>
               </div>
            </nav>
         </header>
      </>
   );
};

export default Navbar;
