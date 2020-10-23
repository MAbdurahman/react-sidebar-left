import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {


  render() {
    return (
      <div className="wrapper">
        <Navbar/>
        <Sidebar/>
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio.</p>
        </main>
      </div>
    )
  }
}

export default App;
