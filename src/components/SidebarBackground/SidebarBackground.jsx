import React from 'react';
import './SidebarBackground.css';

const SidebarBackground = props => {
   return (
      <div className="sidebar__background" onClick={props.click}/>
         
   );
};

export default SidebarBackground;
