import React from 'react';
import './App.css';
import Header from './header';
import HomePage from './HomePage';
import About from './About'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        {/* <About /> */}

      </div>
    );
  }
}

export default App;