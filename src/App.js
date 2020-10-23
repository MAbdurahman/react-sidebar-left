import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarBackground from './components/SidebarBackground/SidebarBackground'

class App extends Component {

  state = {
    isSidebarOpen: false

  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {isSidebarOpen: !prevState.isSidebarOpen};
    });
  };


  render() {
    let sidebar;
    let background;

    return (
      <div className="wrapper">
        <Navbar/>
        <Sidebar/>
        <SidebarBackground/>
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio.</p>
        </main>
      </div>
    )
  }
}

export default App;
