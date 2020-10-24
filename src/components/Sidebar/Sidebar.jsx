import React from 'react';
import './Sidebar.css';

const Sidebar = props => {
   let sidebarClasses = 'sidebar';

   if (props.isShowing) {
      sidebarClasses = 'sidebar is-open';
   }
   return (
      <>
         <nav className={sidebarClasses}>
            <ul className="sidebar--list">
               <li className="sidebar--list--item">
                  <a className="sidebar--item--link" href="/">Home</a>
                  </li>
               <li className="sidebar--list--item">
                  <a className="sidebar--item--link" href="/">About</a>
                  </li>
               <li className="sidebar--list--item">
                  <a className="sidebar--item--link" href="/">Skills</a>
                  </li>
               <li className="sidebar--list--item">
                  <a className="sidebar--item--link" href="/">Portfolio</a>
                  </li>
               <li className="sidebar--list--item">
                  <a className="sidebar--item--link" href="/">Contact</a>
                  </li>
            </ul>
         </nav>
      </>
   );
};

export default Sidebar;
