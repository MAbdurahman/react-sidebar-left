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
      return { isSidebarOpen: !prevState.isSidebarOpen };
    });
  };

  sidebarClickHandler = () => {
    this.setState({ isSidebarOpen: false });
  };


  render() {
    
    let background;

    if (this.state.isSidebarOpen) {
      background = <SidebarBackground click={this.sidebarClickHandler} />;
      
    }

    return (
      <div className="wrapper">
        <Navbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <Sidebar isShowing={this.state.isSidebarOpen} />
        {background}
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio.</p>
        </main>
      </div>
    )
  }
}

export default App;
