import React from 'react';
import './App.css';

class About extends React.Component {

  render() {
    return (
        <div id="container">

            <div class="form-container">
                
                <div id="about-info-container">
                    <h1>About Page</h1>
                    <p>Hi, my name is Jaehun Song. I'm a software engineer studying at UBC! This project is meant to be a Twitter like message board for the CPSC436i course! Feel free to write a message back in the home page! Cheers! </p>
                    <div><img id="dog" src="dog.jpg" /></div>
                </div>
                
            </div>
        </div>
    );
  }
}

export default About;