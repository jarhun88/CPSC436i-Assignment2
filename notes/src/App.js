import React from 'react';
import './App.css';
import Header from './header';
import HomePage from './HomePage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />

      </div>
    );
  }
}

export default App;