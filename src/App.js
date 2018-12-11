import React, { Component } from 'react';
import Carousel from './components/Carousel';
import treepose from './treepose.png';
import yinyangFlow from './yinyangFlow.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <img className="App-logo" src={yinyangFlow} alt="Yin Yang Flow"/>
          <h3 className="Message">          
            Strive to Thrive! Healing with Wholeness
          </h3>
          <div className="links">
            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>          
          
            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>

            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yoga
            </a>

            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reiki
            </a>

            <a
              className="link"
              href="https://www.crunchi.com/melissakelley"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crunchi Makeup
            </a>
            
            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Life Coaching
            </a>

            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>

          </div>

          
          <h1 className="Title">
            Holistic Healing 360
          </h1>
          
          <Carousel/>
          
          
        

        </header>
        

        
      </div>
    );
  }
}

export default App;
