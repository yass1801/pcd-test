import React, { Component } from 'react';
import "./Navb.css"

class Navb extends Component {
  state ={clicked: false};
  handleclick =() => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
      <>
        <nav>
          <a href="index.html">
            <i id='logo' class="fa-solid fa-virus-covid"></i>
          </a>
          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
              <li><a className='active' href="index.html">Home</a></li>
              <li><a href="index.html">Dashbord</a></li>
              <li><a href="index.html">Tips</a></li>
              <li><a href="index.html">Expert? </a></li>
  
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times':' fas fa-bars'}></i>
            
          </div>
        </nav>
      </>
    );

  }
  
}

export default Navb;