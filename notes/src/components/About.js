import React from 'react';
import './About.css';
import Ant from './ant.jpg';

class About extends React.Component {

  render() {
    return (
        <div id="container">
  
          <div id="about-info-container">
              <h1>About Page</h1>
              <p>All hail the queen! </p>
              <div><img className="ant" src={Ant} /></div>
          </div>
                
        </div>
    );
  }
}

export default About;